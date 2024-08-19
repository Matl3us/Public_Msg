import { Request, Response, Router } from "express";

import { v2 as cloudinary } from "cloudinary";
import { upload } from "../lib/multer-config";
import { getUserData } from "../lib/jwt";
import { db } from "../lib/db";
import { io } from "../app";

type MessageItem = {
  id: string;
  content: string;
  fileUrl: string;
  createdAt: Date;
  member: UserItem;
};

type UserItem = {
  id: string;
  username: string;
  imageUrl: string;
};

type MessageDto = MessageItem & {
  conversationId: string;
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function handleUpload(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "msg_app",
  });
  return res;
}

const router = Router();

router.post(
  "/image",
  upload.single("image"),
  async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ err: "Image is missing." });
    }
    const token = req.cookies["token"];
    const { conversationId } = req.query;

    try {
      const user = await getUserData(token);

      if (!user) {
        return res.status(400).json({ err: "Invalid user." });
      }

      if (!conversationId) {
        return res.status(401).json({ error: "Conversation ID missing" });
      }

      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);

      const conversation = await db.conversation.findFirst({
        where: {
          id: conversationId as string,
          members: {
            some: {
              id: user.id,
            },
          },
        },
        include: {
          members: true,
        },
      });

      if (!conversation) {
        return res.status(404).json({ msg: "Conversation not found" });
      }

      const member = conversation.members.find(
        (member) => member.id === user.id
      );
      if (!member) {
        return res.status(404).json({ msg: "Member not found" });
      }

      const message = await db.message.create({
        data: {
          content: cldRes.url,
          fileUrl: cldRes.url,
          conversationId: conversationId as string,
          memberId: user.id,
        },
        include: {
          member: {
            select: {
              id: true,
              username: true,
              imageUrl: true,
            },
          },
        },
      });

      const conversationKey = `chat:${conversationId}:messages`;
      io.emit(conversationKey, message);

      for (let mem of conversation.members) {
        const messageKey = `user:${mem.id}:received:message`;
        io.emit(messageKey);

        const messageAddKey = `user:${mem.id}:message:add`;
        io.emit(messageAddKey, message as MessageDto);
      }

      return res.status(200).json({ msg: "Message sent" });
    } catch (err) {
      console.log(err);

      return res.status(500).json({
        err: "Error with image upload",
      });
    }
  }
);

router.put(
  "/profile",
  upload.single("image"),
  async (req: Request, res: Response) => {
    const token = req.cookies["token"];

    if (!req.file) {
      return res.status(400).json({ err: "Image is missing." });
    }

    try {
      const user = await getUserData(token);
      if (!user) {
        return res.status(400).json({ err: "Invalid user." });
      }

      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      const url = cldRes.url.split("upload/");
      const combinedUrl = url[0] + "upload/t_profile/" + url[1];

      await db.user.update({
        data: {
          imageUrl: combinedUrl,
        },
        where: {
          id: user.id,
        },
      });

      return res
        .status(200)
        .json({ msg: "Profile image updated", url: combinedUrl });
    } catch (err) {
      console.log(err);

      return res.status(400).json({ err: "Invalid token." });
    }
  }
);

export default router;
