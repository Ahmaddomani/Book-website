import { Router } from "express";
import {
  addUser,
  checkAuth,
  getAllUsers,
  login,
  logout,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.route("/").get(getAllUsers);
authRouter.route("/checkAuth").get(checkAuth);
authRouter.route("/signup").post(addUser);
authRouter.route("/login").post(login);
authRouter.route("/logout").post(logout);
export default authRouter;
