import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { routes } from "./routes";
import { AppError } from "./error/AppError";

const app = express();

const port = process.env.PORT || 3330;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionSuccessStatus: 200,
};

app.use(express.json());

app.use("/", cors(corsOptions), routes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, POST,DELETE");

  next();
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(port, () => console.log(`server is runnig on port: ${port}`));
