import { model, Schema } from "mongoose";
import { timeStamp } from "node:console";

const returnStringAndReq = () => {
  return {
    type: String,
    required: true,
  };
};

const bookSchema = new Schema(
  {
    title: {
      unique: true,
      ...returnStringAndReq(),
    },
    author: returnStringAndReq(),
    publishYear: returnStringAndReq(),
    photo: {
      unique: true,
      ...returnStringAndReq(),
    },
    description: {
      unique: true,
      ...returnStringAndReq(),
    },
    genres: [String],
    pages: { type: Number, required: true },
    language: returnStringAndReq(),
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

const Book = model("book", bookSchema);

export default Book;
