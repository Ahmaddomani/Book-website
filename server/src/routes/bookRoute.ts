import { Router } from "express";
import {
  deleteBook,
  getAllBooks,
  getOnSearch,
  getSingleBook,
  insertBook,
  updateBook,
} from "../controllers/bookControllers.js";

const bookRouter = Router();

bookRouter.route("/").get(getAllBooks).post(insertBook);
bookRouter.route("/search").get(getOnSearch);
bookRouter
  .route("/:id")
  .get(getSingleBook)
  .patch(updateBook)
  .delete(deleteBook);

export default bookRouter;
