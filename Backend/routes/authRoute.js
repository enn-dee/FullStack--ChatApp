import express from "express"
const router = express.Router();

// controllers
import { login, logout, signup } from "../controllers/authController.js";

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;