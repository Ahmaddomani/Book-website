import type { ErrorTypes } from "../middlewares/globalErrorHandler.js";

class customError extends Error implements ErrorTypes {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.status =
      this.statusCode > 400 && this.statusCode < 500 ? "Fail" : "Error";
    this.isOperational = true;
  }
}

export default customError;
