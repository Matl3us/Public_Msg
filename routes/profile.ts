import { Request, Response, Router } from "express";

import { getUserData } from "../lib/jwt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "../lib/db";

import bcrypt from "bcrypt";

const SECRET = process.env.SECRET!;

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const token = req.cookies["token"];

  try {
    const user = await getUserData(token);

    if (!user) {
      return res.status(400).json({ err: "Invalid user." });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ err: "Invalid token." });
  }
});

router.put("/password", async (req: Request, res: Response) => {
  let body = req.body;
  const token = req.cookies["token"];

  const { oldPassword, newPassword } = body;
  if (!oldPassword || !newPassword) {
    return res.status(400).json({ err: "Body data missing." });
  }

  try {
    const decoded = jwt.verify(token, SECRET) as JwtPayload;

    const user = await db.user.findFirst({
      where: {
        id: decoded.sub,
        username: decoded.username,
      },
    });

    if (!user) {
      return res.status(400).json({ err: "Invalid user." });
    }

    if (!(await bcrypt.compare(oldPassword, user.password))) {
      return res.status(400).json({ err: "Invalid password." });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(newPassword, saltRounds);

    await db.user.update({
      data: {
        password: passwordHash,
      },
      where: {
        id: user.id,
      },
    });

    return res.status(200).json({ err: "Password updated" });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ err: "Invalid token." });
  }
});

enum Status {
  Online,
  Away,
  DontDisturb,
  Offline,
}

router.get("/status", async (req: Request, res: Response) => {
  const token = req.cookies["token"];

  try {
    const user = await getUserData(token);

    if (!user) {
      return res.status(400).json({ err: "Invalid user." });
    }

    return res.status(200).json({ status: user.status });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ err: "Invalid token." });
  }
});

router.put("/status", async (req: Request, res: Response) => {
  let body = req.body;
  const token = req.cookies["token"];

  const { status } = body;
  try {
    const user = await getUserData(token);

    if (!user) {
      return res.status(400).json({ err: "Invalid user." });
    }

    switch (status) {
      case Status.Online:
        await db.user.update({
          data: {
            status: "ONLINE",
          },
          where: {
            id: user.id,
          },
        });
        break;
      case Status.Away:
        await db.user.update({
          data: {
            status: "AWAY",
          },
          where: {
            id: user.id,
          },
        });
        break;
      case Status.DontDisturb:
        await db.user.update({
          data: {
            status: "DONTDISTURB",
          },
          where: {
            id: user.id,
          },
        });
        break;
      case Status.Offline:
        await db.user.update({
          data: {
            status: "OFFLINE",
          },
          where: {
            id: user.id,
          },
        });
        break;
      default:
        return res.status(400).json({ err: "Invalid status." });
    }

    return res.status(200).json({ msg: "Changed status" });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ err: "Invalid token." });
  }
});

export default router;
