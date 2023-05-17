import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//database connection-
async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  try {
    console.log(`database connection successfull at ${port}`);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connecte database");
  }
}

connection();
