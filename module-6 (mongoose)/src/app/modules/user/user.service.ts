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

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await userSchemaModel.findOne(
    { id: payload },
    {
      name: 1,
      role: 1,
    }
  );
  return user;
};
