const mongoose = require('mongoose')

const url = process.env.MONGO_CON;

// function for mongodb connection using mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(url);

    console.log("mongo DB connected")

  } catch (error) {
    console.log(error.message);
  }
};


connectDB()
