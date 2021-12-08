import { ErrorRequestHandler } from "express";
interface Error {
  status?: number;
  message?: string;
}

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  _req,
  res,
  _next
) => {
  return res
    .status(err.status || 500)
    .send(err.message || "internal serverError");
};

// module.exports = errorHandler;
