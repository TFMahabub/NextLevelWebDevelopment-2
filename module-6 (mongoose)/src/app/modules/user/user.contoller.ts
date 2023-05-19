import { Request, Response } from "express-serve-static-core";
import { createUserDB } from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserDB();

  const statusMessage = {
    status: "success",
    data: user,
  };
  res.status(200).json(statusMessage);
};
