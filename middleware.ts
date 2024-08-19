import { NextFunction, Request, Response } from "express";

export default function middleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { pathname } = new URL(req.originalUrl, `http://${req.headers.host}`);

  if (
    pathname.startsWith("/static/") ||
    pathname.endsWith(".js") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".json")
  ) {
    return next();
  }

  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    res.clearCookie("token");
    return next();
  }

  if (req.cookies["token"]) {
    return next();
  } else {
    return res.redirect("/login");
  }
}
