import type { Request, Response, NextFunction } from "express";
import type { Error } from "mongoose";
import customError from "../utils/customError.js";

export interface ErrorTypes extends Error {
  isOperational: boolean;
  statusCode: number;
  status: string;
  keyValue?: { [key: string]: string };
  code?: number;
  errors?: [Error];
}

// ---------------------------------Handling Errors Start-------------------------
const castError = () => {
  return new customError(400, "Invalid Id");
};

const duplicateError = (err: ErrorTypes) => {
  const msg = `${Object.keys(err.keyValue || {}).join("")} is existed`;

  return new customError(400, msg);
};

const validationErrorHandler = (error: ErrorTypes) => {
  const messages = Object.values(error.errors).map((err) => err.message);
  const cleanMessage = messages.join(" and ");
  return new customError(400, cleanMessage);
};

// ---------------------------------Handling Errors End-------------------------

const productionHandler = (error: ErrorTypes, res: Response) => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.status || "fail",
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const globalErrorHandler = (
  err: ErrorTypes,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.isOperational = err.isOperational || false;
  // Development Function
  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stackTrace: err.stack,
      error: err,
    });
  }
  //Production Function
  if (process.env.NODE_ENV == "production") {
    if (err.name === "CastError") err = castError();
    if (err.code === 11000) err = duplicateError(err);
    console.log(err.name);
    if (err.name === "ValidationError") err = validationErrorHandler(err);

    productionHandler(err, res);
  }
};
