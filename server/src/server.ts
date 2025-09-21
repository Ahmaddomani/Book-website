import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import connectToDb from "./config/db.js";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";
import authRouter from "./Routes/authRoute.js";
import bookRouter from "./Routes/bookRoute.js";
import customError from "./utils/customError.js";
import cookieParser from "cookie-parser";
import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import helmet from "helmet";
import sanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

// -----------------Create Limiter Start -----------------
const RouteLimiter = rateLimit({
  limit: 1000,
  windowMs: 60 * 60 * 1000,
  message: "You Can't Make More Request , Please Try After 1 Hour",
  keyGenerator: (req) => req?.user?.id || ipKeyGenerator(req.ip),
});
// -----------------Create Limiter End -----------------

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(helmet());
app.use(sanitize());
app.use(xss());
app.use(hpp());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

dotEnv.config();

// ------------------------- Routers Start -------------------------
app.use("/api/v1/books", RouteLimiter, bookRouter);
app.use("/api/v1/auth", RouteLimiter, authRouter);
// ------------------------- Routers End -------------------------

app.use((req, res, next) => {
  const error = new customError(404, "This Page is Not Found");
  next(error);
});

console.log(process.env.NODE_ENV);

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

connectToDb().then(() => {
  app.listen(port, () => console.log(`listen on Port ${port}`));
});
