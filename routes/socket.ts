import { Request, Response, Router } from "express";

import { getUserData } from "../lib/jwt";
import { db } from "../lib/db";

import { io } from "../app";

const router = Router();

type MessageItem = {
  id: string;
  content: string;
  fileUrl: string;
  createdAt: Date;
  member: UserItem;
};

type FriendItem = {
  id: string;
  user: {
    id: string;
    username: string;
    imageUrl: string;
  };
};

type MessageDto = MessageItem & {
  conversationId: string;
};

type UserItem = {
  id: string;
  username: string;
  imageUrl: string;
};

io.on("connection", (socket) => {
  socket.on("disconnect", async () => {});
});

router.post("/invites", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const { friendCode } = req.body;

  if (!friendCode) {
    return res.status(400).json({ msg: "Invalid body data" });
  }

  try {
    const sender = await getUserData(token);
    const receiver = await db.user.findUnique({
      where: {
        friendCode,
      },
    });
    if (!sender || !receiver || receiver.id == sender.id) {
      return res.status(400).json({ msg: "Invalid request" });
    }

    const request = await db.friendRequest.create({
      data: {
        senderId: sender.id,
        receiverId: receiver.id,
        status: "PENDING",
      },
      select: {
        id: true,
        sender: {
          select: {
            id: true,
            username: true,
            imageUrl: true,
          },
        },
      },
    });

    const navigationKey = `user:${receiver.id}:notification`;
    io.emit(navigationKey);

    const notificationKey = `user:${receiver.id}:notification:add`;
    io.emit(notificationKey, request);

    return res.status(200).json({ msg: "Invite sent" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: "Internal Error" });
  }
});

router.post("/messages", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  try {
    const user = await getUserData(token);

    const { content, fileUrl } = req.body;
    const { conversationId } = req.query;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!conversationId) {
      return res.status(401).json({ error: "Conversation ID missing" });
    }

    if (!content) {
      return res.status(401).json({ error: "Content missing" });
    }

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

    const member = conversation.members.find((member) => member.id === user.id);
    if (!member) {
      return res.status(404).json({ msg: "Member not found" });
    }

    const message = await db.message.create({
      data: {
        content,
        fileUrl,
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
  } catch (error) {
    console.log("[MESSAGE_POST]", error);
    return res.status(500).json({ msg: "Internal Error" });
  }
});

router.put("/friends/add", async (req: Request, res: Response) => {
  const token = req.cookies["token"] as string;
  const id = req.query["id"] as string;

  if (!id || !token) {
    return res.status(400).json({ msg: "Invalid request." });
  }

  try {
    const receiver = await getUserData(token);
    if (!receiver) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    const request = await db.friendRequest.findUnique({
      where: {
        id,
        receiverId: receiver.id,
      },
      select: {
        id: true,
        senderId: true,
        receiver: true,
      },
    });
    if (!request) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    await db.friendRequest.update({
      data: {
        status: "ACCEPTED",
      },
      where: {
        id,
      },
    });

    const friendItem = {
      id: id,
      user: {
        id: request.receiver.id,
        username: request.receiver.username,
        imageUrl: request.receiver.imageUrl,
      },
    } as FriendItem;
    const friendAddKey = `user:${request.senderId}:friend:add`;
    io.emit(friendAddKey, friendItem);

    return res.status(200).json({
      msg: "Success",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: "Internal Error" });
  }
});

router.put("/friends/remove", async (req: Request, res: Response) => {
  const token = req.cookies["token"] as string;
  const id = req.query["id"] as string;

  if (!id || !token) {
    return res.status(400).json({ msg: "Invalid request." });
  }

  try {
    const user = await getUserData(token);
    if (!user) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    const request = await db.friendRequest.findUnique({
      where: {
        id,
        OR: [{ senderId: user.id }, { receiverId: user.id }],
      },
    });
    if (!request) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    await db.friendRequest.update({
      data: {
        status: "DELETED",
      },
      where: {
        id,
      },
    });

    const userId =
      user.id === request.senderId ? request.receiverId : request.senderId;
    const friendRemoveKey = `user:${userId}:friend:remove`;
    io.emit(friendRemoveKey, id);

    return res.status(200).json({
      msg: "Success",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: "Internal Error" });
  }
});

router.put("/invites/cancel", async (req: Request, res: Response) => {
  const token = req.cookies["token"] as string;
  const id = req.query["id"] as string;

  if (!id || !token) {
    return res.status(400).json({ msg: "Invalid request." });
  }

  try {
    const sender = await getUserData(token);
    if (!sender) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    const request = await db.friendRequest.findUnique({
      where: {
        id,
        senderId: sender.id,
      },
    });
    if (!request) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    await db.friendRequest.update({
      data: {
        status: "CANCELED",
      },
      where: {
        id,
      },
    });

    const notificationRemoveKey = `user:${request.receiverId}:notification:remove`;
    io.emit(notificationRemoveKey, id);

    return res.status(200).json({
      msg: "Success",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: "Internal Error" });
  }
});

router.put("/invites/reject", async (req: Request, res: Response) => {
  const token = req.cookies["token"] as string;
  const id = req.query["id"] as string;

  if (!id || !token) {
    return res.status(400).json({ msg: "Invalid request." });
  }

  try {
    const receiver = await getUserData(token);
    if (!receiver) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    const request = await db.friendRequest.findUnique({
      where: {
        id,
        receiverId: receiver.id,
      },
    });
    if (!request) {
      return res.status(400).json({ msg: "Invalid request." });
    }

    await db.friendRequest.update({
      data: {
        status: "REJECTED",
      },
      where: {
        id,
      },
    });

    const inviteRemoveKey = `user:${request.senderId}:invite:remove`;
    io.emit(inviteRemoveKey, id);

    return res.status(200).json({
      msg: "Success",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ msg: "Internal server error." });
  }
});

export default router;
