import jwt from "jsonwebtoken";
import { ChatUser } from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
     return  res.status(500).json({ erro: "Unathorized - No token detected" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
    const user = await ChatUser.findOne({ _id: decoded.userId }).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log("Error in protectRoute middleware: ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default protectRoute;
