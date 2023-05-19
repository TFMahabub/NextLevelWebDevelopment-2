import { IUser } from "./user.interface";
import userSchemaModel from "./user.model.schema";

export const createUserDB = async (payload: IUser) => {
  const user = new userSchemaModel(payload);

  await user.save();
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await userSchemaModel.find();
  return users;
};
