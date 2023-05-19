import cors from "cors";
import express from "express";
import { Application } from "express-serve-static-core";
//all routers
import userRouter from "./app/modules/user/user.router";
const app: Application = express();

//useing cors-
app.use(cors());

//parse data-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

export default app;
