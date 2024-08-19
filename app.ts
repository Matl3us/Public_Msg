import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  path: "/api/socket/io",
  addTrailingSlash: false,
});

export { server, app, io };
