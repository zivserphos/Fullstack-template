import morgan from "morgan";
import { Handler, Request } from "express";

export const morganHandler: Handler = (_req, _res, next) => {
  morgan.token("body", (req: Request, _res) => {
    return JSON.stringify(req.body);
  });
  next();
};
