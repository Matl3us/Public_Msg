import { Request, Response, Router } from "express";

import { getUserData, isUserAdmin } from "../lib/jwt";
import { db } from "../lib/db";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const id = req.query["id"] as string;

  if (!id) {
    return res.status(400).json({ err: "Invalid conversation Id." });
  }

  try {
    const user = await getUserData(token);
    if (!user) {
      return res.status(400).json({ err: "Invalid request." });
    }

    const conversation = await db.conversation.findFirst({
      where: {
        id,
        members: {
          some: {
            id: user.id,
          },
        },
      },
      include: {
        members: {
          select: {
            id: true,
            username: true,
            imageUrl: true,
            status: true,
          },
        },
      },
    });

    return res.status(200).json(conversation);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

router.get("/all", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const user = await getUserData(token);

  if (!user) {
    return res.status(400).json({ err: "Invalid request." });
  }

  try {
    const conversationsList = await db.conversation.findMany({
      where: {
        members: {
          some: {
            id: user.id,
          },
        },
      },
      select: {
        id: true,
        name: true,
        isGroup: true,
        adminId: true,
        members: {
          select: {
            id: true,
            username: true,
            imageUrl: true,
            status: true,
          },
        },
        messages: {
          take: 1,
          orderBy: {
            createdAt: "desc",
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
        },
      },
    });

    return res.status(200).json(conversationsList);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

router.post("/group", async (req: Request, res: Response) => {
  let body = req.body;
  const token = req.cookies["token"];

  const { name } = body;
  try {
    const user = await getUserData(token);
    if (!user) {
      return res.status(400).json({ err: "Invalid request." });
    }

    const conversation = await db.conversation.create({
      data: {
        isGroup: true,
        name,
        adminId: user.id,
        members: {
          connect: { id: user.id },
        },
      },
    });
    return res.status(200).json({
      msg: "Success",
      id: conversation.id,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

router.put("/group", async (req: Request, res: Response) => {
  let body = req.body;
  const token = req.cookies["token"];

  const { conversationId, userIds } = body;
  if (
    !conversationId ||
    !userIds ||
    !Array.isArray(userIds) ||
    userIds.length === 0
  ) {
    return res.status(400).json({ err: "Invalid body data." });
  }

  if (userIds.length > 30) {
    return res.status(400).json({ err: "Too many users added at once." });
  }

  try {
    const isAdmin = await isUserAdmin(token, conversationId);
    if (!isAdmin) {
      return res.status(400).json({ err: "User is not admin." });
    }
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }

  for (const userId of userIds) {
    if (userId) {
      try {
        await db.user.findUniqueOrThrow({
          where: {
            id: userId,
          },
        });
      } catch (err) {
        return res.status(400).json({ err: "Invalid user." });
      }
    }
  }

  const ids = userIds.map((e) => ({ id: e }));
  try {
    await db.conversation.update({
      data: {
        members: {
          connect: ids,
        },
      },
      where: { id: conversationId },
    });

    return res.status(200).json({ msg: "Success" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

router.put("/group/name", async (req: Request, res: Response) => {
  let body = req.body;
  const token = req.cookies["token"];

  const { conversationId, name } = body;
  if (!conversationId || !name) {
    return res.status(400).json({ err: "Invalid body data." });
  }

  try {
    const isAdmin = await isUserAdmin(token, conversationId);
    if (!isAdmin) {
      return res.status(400).json({ err: "User is not admin." });
    }
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }

  try {
    await db.conversation.update({
      data: {
        name,
      },
      where: { id: conversationId },
    });

    return res.status(200).json({ msg: "Success" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

router.post("/private", async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const id = req.query["id"] as string;

  if (!id) {
    return res.status(400).json({ err: "Invalid request." });
  }

  try {
    const user = await getUserData(token);
    const friend = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!user || !friend || user.id == friend.id) {
      return res.status(400).json({ err: "Invalid request." });
    }

    const existingConversation = await db.conversation.findFirst({
      where: {
        isGroup: false,
        AND: [
          {
            members: {
              some: {
                id: user.id,
              },
            },
          },
          {
            members: {
              some: {
                id: friend.id,
              },
            },
          },
        ],
      },
    });

    if (existingConversation) {
      return res.status(409).json({
        msg: "Conversation already exists.",
        location: `/conversations/${existingConversation.id}`,
      });
    }

    const conversation = await db.conversation.create({
      data: {
        isGroup: false,
        adminId: user.id,
        members: {
          connect: [
            {
              id: friend.id,
            },
            { id: user.id },
          ],
        },
      },
    });

    return res.status(200).json({
      msg: "Success",
      location: `/conversations/${conversation.id}`,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err: "Internal server error." });
  }
});

export default router;
