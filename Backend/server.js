import express from "express";
const app = express();

import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;

// custom routes
import authRoute from "./routes/authRoute.js";
import messagesRoute from "./routes/messagesRoute.js"

// connect to db
import { connectToDb } from "./db/connectToDb.js";
import protectRoute from "./middleware/protectRoute.js";


app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoute);
app.use('/api/messages', protectRoute,messagesRoute);

app.listen(port, () => {
    connectToDb();
  console.log("Listening on port: ", port);
});
