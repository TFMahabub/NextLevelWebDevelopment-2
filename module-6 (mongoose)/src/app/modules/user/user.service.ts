import User from "./user.model.schema";

export const createUserDB = async () => {
  const user = new User({
    id: "08",
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
  return user;
};
