import express from "express";
import { createUserController } from "./user.contoller";
const router = express.Router();

router.get("/createUser", createUserController);

export default router;
