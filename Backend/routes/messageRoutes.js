import express from "express";
const router = express.Router();
import { sendMessage, getMessages } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";

router.post("/send/:id", protectRoute,sendMessage);
router.get("/:id", protectRoute,getMessages);

export default router;
