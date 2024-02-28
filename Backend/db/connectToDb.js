import mongoose from "mongoose";
export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("connected to DB");
  } catch (err) {
    console.log("Failed to connect to DB: ", err.message);
  }
};
