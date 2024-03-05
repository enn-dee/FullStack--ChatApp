import { error } from "console";
import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.log("Error in connecting Mongo", error)
  }
};

export default connectToMongoDb;
