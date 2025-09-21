import type { Request, Response, NextFunction, RequestHandler } from "express";

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const asyncErrorHandler = (asyncFunc: AsyncRequestHandler): RequestHandler => {
  return (req, res, next) => {
    asyncFunc(req, res, next).catch(next);
  };
};

export default asyncErrorHandler;
