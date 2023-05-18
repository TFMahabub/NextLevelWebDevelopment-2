import cors from "cors";
import express from "express";
import { Application, Request, Response } from "express-serve-static-core";
import { Schema, model } from "mongoose";

const app: Application = express();

//useing cors-
app.use(cors());

//parse data-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/createUser", (req: Request, res: Response) => {
  //   res.send("Hello World!");
  //   next();

  // 1. Create an interface representing a document in MongoDB.
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNumber: string;
    permanentAddress: string;
  }

  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNumber: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  // 3. Create a Model.
  const User = model<IUser>("User", userSchema);

  const createUserDB = async () => {
    const user = new User({
      id: "05",
      role: "student",
      password: "1234455",
      name: {
        firstName: "mahabub",
        lastName: "alam",
      },
      dateOfBirth: "14/01/1999",
      gender: "male",
      email: "rjmahabub543@gmail.com",
      contactNo: "01636725669",
      emergencyContactNumber: "01868291303",
      permanentAddress: "Nawabgonj, Dhaka",
    });

    await user.save();
    res.send(user);
  };
  createUserDB();
});

export default app;
