import { Request, Response, Router } from "express";

import { getUserData } from "../lib/jwt";
import { Message } from "@prisma/client";
import { db } from "../lib/db";

const MESSAGES_BATCH = 15;
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const cursor = req.query["cursor"] as string;
  const conversationId = req.query["conversationId"] as string;

  try {
    const user = await getUserData(token);

    if (!user) {
      return res.status(400).json({ err: "Invalid user." });
    }

    if (!conversationId) {
      return res.status(400).json({ err: "Conversation Id missing." });
    }

    let messages: Message[] = [];

    if (cursor) {
      messages = await db.message.findMany({
        take: MESSAGES_BATCH,
        skip: 1,
        cursor: {
          id: cursor,
        },
        where: {
          conversationId,
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
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      messages = await db.message.findMany({
        take: MESSAGES_BATCH,
        where: {
          conversationId,
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
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    let nextCursor = null;

    if (messages.length === MESSAGES_BATCH) {
      nextCursor = messages[MESSAGES_BATCH - 1].id;
    }

    return res.status(200).json({
      items: messages,
      nextCursor,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal error." });
  }
});

export default router;
