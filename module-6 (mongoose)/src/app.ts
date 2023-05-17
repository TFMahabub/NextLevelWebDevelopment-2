import cors from "cors";
import express from "express";
import {
  Application,
  NextFunction,
  Request,
  Response,
} from "express-serve-static-core";

const app: Application = express();

//useing cors-
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
});

export default app;
