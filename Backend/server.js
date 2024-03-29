import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
import path from "path";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;

// custom imports
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";
import protectRoute from "./middleware/protectRoute.js";
import { app, server } from "./Socket/Socket.js";

const __dirname = path.resolve();

app.use(cors());
app.use(express.json()); //to parse incomming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", protectRoute, messageRoutes);

app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDb();
  console.log("listening on port: ", PORT);
});
