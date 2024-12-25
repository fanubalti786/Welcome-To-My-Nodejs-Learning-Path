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

    console.log("mongo DB connected")

  } catch (error) {
    console.log(error.message);
  }
};

connectDB()



// Schema for Type restriction
const TodoSchema = new mongoose.Schema({
    id:{
        type:Number,
        require: true
    },

    title:{
        type:String,
        require: true
    },

    descriptiion: String,

    createAt:{
        type: Date,
        default: Date.now()
    }
});

const Todos = mongoose.model('Todo',TodoSchema);






app.get("/", (req, res) => {
  try {

  console.log("server is running");

  } catch (error) {
    res.status(440).json({
      data: [],
      status: "error",
    });
  }
});

app.get("/todos", async (req, res) => {

  try {
  const todos = await Todos.find()
  res.status(220).json({
    data: todos,
    status: "Success"

  });

  console.log("Get all todos List Through DB");

  } catch (error) {
    res.status(440).json({
      data: [],
      status: "error",
      error: error.message
    });
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
  const id = req.params?.id;
  // let todo = await Todos.find({id:id})
  let todo = await Todos.findOne({_id:id})
  // let todo = await Todos.findById(id)

  res.status(202).json({
      data: todo,
      status: "error",
      error: error
  })

  console.log("Get todo according to id through DB");


  } catch (error) {
    res.status(404).json({
      data: null,
      status: error.message,
    });
  }
});

app.post("/todos/create", async (req, res) => {
  try {

  let newTodo = await Todos({
    id: req.body?.id,
    title: req.body?.title,
    descriptiion: req.body?.descriptiion
  })

  let output = await newTodo.save();

  res.status(220).json({
    data: output,
    status: "Success"
  });

  console.log("Creating todos list through DB");


  } catch (error) {
    res.status(402).json({
      data: {},
      status: "error",
      error: error.message,
    });
  }
});

app.patch("/todos/update/:id", async (req, res) => {
  try {

    // let id = req.params?.id;
    // let todo = await Todos.findOneAndUpdate({id:id})
    // res.status(205).json({
        
    // })

  

  console.log("update the previous list of todo through DB");

  } catch (error) {
    res.status(402).json({
      data: [],
      status: "error",
      error: error,
    });
  }
});

app.delete("/todos/delete/:id", async (req, res) => {
  try {

    let id = req.params?.id;
    let todo = await Todos.findByIdAndDelete({_id:id})

    res.status(209).json({
        data: todo,
        status: "Success"
    })



  console.log("delete the previous list of todo through DB");

  } catch (error) {
    res.status(402).json({
      data: {},
      status: "error",
      error: error.message,
    });
  }
});
