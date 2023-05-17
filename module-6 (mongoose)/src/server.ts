const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

//database connection-
async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  try {
    console.log(`database connection successfull at ${port}`);
  } catch (err) {
    console.error("Failed to connecte database");
  }
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

connection();
