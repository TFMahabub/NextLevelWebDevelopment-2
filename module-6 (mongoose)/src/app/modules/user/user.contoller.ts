import { Request, Response } from "express-serve-static-core";
import { createUserDB, getUserFromDB } from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserDB(req.body);

  const statusMessage = {
    status: "success",
    data: user,
  };
  res.status(200).json(statusMessage);
};

export const getUsers = async (req: Request, res: Response) => {
  const user = await getUserFromDB();

  res.status(200).json({
    status: "successsss",
    data: user,
  });
};
