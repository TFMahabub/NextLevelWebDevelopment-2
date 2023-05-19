import express from "express";
import { createUserController, getUsers } from "./user.contoller";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createUserController);

export default router;
