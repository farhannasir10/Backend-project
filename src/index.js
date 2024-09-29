import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose";
import { connectDB } from "./db/index.js";
dotenv.config({
  path : "./db"
})


connectDB()


/*
 One way of connecting 
 now do it in second way and professional way

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is running on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error!", error);
    throw error;
  }
})();
*/