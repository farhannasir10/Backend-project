import mongoose from "mongoose";
import { DB_name } from "../constants.js";  // <-- Add .js here

export const connectDB  = async () => {
  try {
    const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    console.log(`\n mongodb connected !! DB host : ${connectioninstance.connection.host}`);

  } catch (error) {
    console.log("Connection Error!", error);
    process.exit(1);
  }
};
