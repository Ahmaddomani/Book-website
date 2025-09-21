import asyncErrorHandler from "./../utils/ayncErrorHandler.js";
import type { NextFunction, Request, Response } from "express";
import Book from "../modals/booksModal.js";
import customError from "../utils/customError.js";
import { log } from "node:console";
import { ApiFeatures } from "../utils/apiFeatures.js";

//  ------------------------Start Controllers------------------------
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiFeatures = new ApiFeatures(Book.find(), req.query);
  const books = await apiFeatures.filter().paginate().query;
  const length = books.length;

  res.status(200).json({
    length,
    status: "success",
    data: books,
  });
};

export const getSingleBook = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book)
      return next(
        new customError(404, "The resource with the given ID does not exist")
      );
    res.status(200).json({
      status: "success",
      data: book,
    });
  }
);

export const insertBook = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const books = await Book.create(req.body);
    res.status(201).json({
      status: "success",
      data: books,
    });
  }
);

export const updateBook = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book)
      return next(
        new customError(404, "The resource with the given ID does not exist")
      );
    res.status(200).json({
      status: "success",
      message: "The Book Has been Updated",
    });
  }
);

export const deleteBook = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book)
      return next(
        new customError(404, "The resource with the given ID does not exist")
      );
    res.status(200).json({
      status: "success",
      message: "The Book Has been Deleted",
    });
  }
);

export const getOnSearch = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query);
    const { search } = req.query;

    const books = await Book.find({
      title: { $regex: new RegExp(`^${search}`, "i") },
    });
    const length = books.length;
    res.status(200).json({
      length,
      status: "success",
      data: books,
    });
  }
);

// ------------------------End Controllers------------------------
