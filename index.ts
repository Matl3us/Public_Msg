import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import expressStaticGzip from "express-static-gzip";

import { server, app } from "./app";

import authRouter from "./routes/auth";
import conversationsRouter from "./routes/conversations";
import friendsRouter from "./routes/friends";
import messagesRouter from "./routes/messages";
import profileRouter from "./routes/profile";
import socketRouter from "./routes/socket";
import uploadRouter from "./routes/upload";

import middleware from "./middleware";

app.use(cors());

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/conversations", conversationsRouter);
app.use("/api/friends", friendsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/profile", profileRouter);
app.use("/api/socket", socketRouter);
app.use("/api/upload", uploadRouter);

app.use(middleware);

//app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  expressStaticGzip(path.join(__dirname, "client/build"), {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
  })
);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
