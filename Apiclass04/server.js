const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 1100;

app.listen(port, () => {
  console.log(`Example App listening on port :${port}`);
});

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// function for mongodb connection using mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://fanubalti786:sultanG0101@servicecluster0.wcq6o.mongodb.net/"
    );
  } catch (error) {
    console.log(error.message);
  }
};

connectDB()


app.get("/", (req, res) => {
  console.log("server is running");
  try {
  } catch (error) {
    res.status(440).json({
      data: [],
      status: "error",
    });
  }
});

app.get("/todos", (req, res) => {
  console.log("Get all todos List Through DB");
  try {
  } catch (error) {
    res.status(440).json({
      data: [],
      status: "error",
    });
  }
});

app.get("/todos/:id", (req, res) => {
  console.log("Get todo according to id through DB");
  try {
  } catch (error) {
    res.status(440).json({
      data: [],
      status: "error",
    });
  }
});

app.post("/todos/create", (req, res) => {
  console.log("Creating todos list through DB");
  try {
  } catch (error) {
    res.status(402).json({
      data: [],
      status: "error",
      error: error,
    });
  }
});

app.patch("/todos/update/:id", (req, res) => {
  console.log("update the previous list of todo through DB");
  try {
  } catch (error) {
    res.status(402).json({
      data: [],
      status: "error",
      error: error,
    });
  }
});

app.delete("/todos/delete/:id", (req, res) => {
  console.log("delete the previous list of todo through DB");
  try {
  } catch (error) {
    res.status(402).json({
      data: [],
      status: "error",
      error: error,
    });
  }
});
