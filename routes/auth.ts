import { Request, Response, Router } from "express";
import ShortUniqueId from "short-unique-id";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { loginSchema, registerSchema } from "../lib/zod-schemas";
import { db } from "../lib/db";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  let body = req.body;
  const result = registerSchema.safeParse(body);
  if (!result.success) {
    return res.status(400).json({ err: result.error.formErrors.fieldErrors });
  }

  const { email, username, password } = body;
  try {
    const user = await db.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (user) {
      return res
        .status(400)
        .json({ err: "Username and email must be unique." });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: "Internal server error." });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const uid = new ShortUniqueId({ length: 10 });

  await db.user.create({
    data: {
      username,
      email,
      password: passwordHash,
      imageUrl: `https://ui-avatars.com/api/?background=random&color=fff&name=${username}`,
      friendCode: uid.rnd(),
      status: "ONLINE",
    },
  });

  return res.json({ msg: "Success" });
});

router.post("/login", async (req: Request, res: Response) => {
  let body = req.body;
  const result = loginSchema.safeParse(body);
  if (!result.success) {
    return res.status(400).json({ err: result.error.formErrors.fieldErrors });
  }

  const { email, password } = body;
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !(await bcrypt.compare(password, user?.password))) {
      return res.status(400).json({ err: "Invalid email or password." });
    }

    const secret = process.env.SECRET!;

    const token = jwt.sign({ sub: user.id, username: user.username }, secret, {
      expiresIn: 6 * 60 * 60 * 1000,
    });

    res.cookie("token", token, {
      maxAge: 6 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return res.status(200).json({
      msg: "Success",
      data: {
        id: user.id,
        username: user.username,
        imageUrl: user.imageUrl,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Internal server error." });
  }
});

router.post("/logout", async (req: Request, res: Response) => {
  res.clearCookie("token");

  return res.status(200).json({
    msg: "Success",
  });
});

export default router;
