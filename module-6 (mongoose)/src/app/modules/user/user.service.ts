import { IUser } from "./user.interface";
import userSchemaModel from "./user.model.schema";

export const createUserDB = async (payload: IUser) => {
  const user = new userSchemaModel(payload); //user => class user

  await user.save(); //instance methods => custom instance methods
  console.log(user.fullName());

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
      name: 1, //this object used to get the specific property you want
      role: 1, //this object used to get the specific property you want
    }
  );
  return user;
};
