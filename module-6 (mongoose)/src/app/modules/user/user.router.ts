import express from "express";
import { createUserController, getUsers, getuserById } from "./user.contoller";
const router = express.Router();

router.get("/", getUsers);
router.get("/user-by-id/:id", getuserById);
router.post("/create-user", createUserController);

export default router;
