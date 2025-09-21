import type { NextFunction, Request, Response } from "express";
import User from "../modals/userModal.js";
import util from "util";
import jwt from "jsonwebtoken";
import customError from "../utils/customError.js";
import asyncErrorHandler from "../utils/ayncErrorHandler.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRED,
  });
};

// Create Function to Send Response And Cookies
const createSendResponse = (user, message, res, statusCode) => {
  const options = {
    maxAge: 10 * 24 * 3600 * 1000, // 10 days
    secure: process.env.NODE_ENV === "production", // you cant use this in http you need https
    httpOnly: true, // For just not be read
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  const token = signToken(user.id);

  user.password = undefined;

  res.cookie("jwt", token, options);

  res.status(statusCode).json({
    status: "success",
    data: user,
    token,
    message: message || undefined,
  });
};

export const getAllUsers = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    res.status(201).json({
      status: "success",
      data: users,
    });
  }
);

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.jwt;

  if (!token) return next(new customError(401, "Not login"));

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECRET_STR
  );

  const user = await User.findById(decodedToken?.id);

  if (!user) return next(new customError(401, "The User is not found"));

  if (user.isPasswordChanged(decodedToken.iat)) {
    return next(
      new customError(
        401,
        "The User has Changed the password lately please login again"
      )
    );
  }

  req.user = user;

  createSendResponse(user, "login", res, 200);

  // res.status(200).json({
  //   status: "success",
  //   message: "Login",
  // });
};

export const addUser = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create(req.body);

    createSendResponse(user, "success", res, 201);

    // res.status(201).json({
    //   status: "success",
    //   data: user,
    // });
  }
);

export const login = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    // Check from the password
    const isMatch = await user?.comparePasswords(password);

    if (!user || !isMatch)
      return next(new customError(401, "Wrong Email Or Password"));

    createSendResponse(user, "success", res, 200);
  }
);

export const logout = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });
    res.status(200).json({
      status: "success",
      message: "logout successfully",
    });
  }
);
