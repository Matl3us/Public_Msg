import { Request, Response, Router } from "express";

import { getUserData } from "../lib/jwt";
import { db } from "../lib/db";

const router = Router();

router.get("/invites/created", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const user = await getUserData(token);

  if (!user) {
    return res.status(400).json({ err: "Invalid request." });
  }

  try {
    const invitesList = await db.friendRequest.findMany({
      where: {
        senderId: user.id,
        status: "PENDING",
      },
      select: {
        id: true,
        receiver: {
          select: {
            id: true,
            username: true,
            imageUrl: true,
          },
        },
      },
    });

    return res.status(200).json(invitesList);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

router.get("/invites/received", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const user = await getUserData(token);

  if (!user) {
    return res.status(400).json({ err: "Invalid request." });
  }

  try {
    const invitesList = await db.friendRequest.findMany({
      where: {
        receiverId: user.id,
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

    return res.status(200).json(invitesList);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

type FriendItem = {
  id: string;
  user: {
    id: string;
    username: string;
    imageUrl: string;
    status: "ONLINE" | "AWAY" | "DONTDISTURB" | "OFFLINE";
  };
};

router.get("/list", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const user = await getUserData(token);

  if (!user) {
    return res.status(400).json({ err: "Invalid request." });
  }

  try {
    const sentPart = await db.friendRequest.findMany({
      where: {
        senderId: user.id,
        status: "ACCEPTED",
      },
      select: {
        id: true,
        receiver: {
          select: {
            id: true,
            username: true,
            imageUrl: true,
            status: true,
          },
        },
      },
    });

    const receivedPart = await db.friendRequest.findMany({
      where: {
        receiverId: user.id,
        status: "ACCEPTED",
      },
      select: {
        id: true,
        sender: {
          select: {
            id: true,
            username: true,
            imageUrl: true,
            status: true,
          },
        },
      },
    });

    let friendsList: Array<FriendItem> = [];
    friendsList = [
      ...sentPart.map((e) => ({
        id: e.id,
        user: {
          id: e.receiver.id,
          username: e.receiver.username,
          imageUrl: e.receiver.imageUrl,
          status: e.receiver.status,
        },
      })),
      ...receivedPart.map((e) => ({
        id: e.id,
        user: {
          id: e.sender.id,
          username: e.sender.username,
          imageUrl: e.sender.imageUrl,
          status: e.sender.status,
        },
      })),
    ];

    return res.status(200).json(friendsList);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

export default router;
