import { ChatUser } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genTokenSetCookie from "../utils/genTokenSetCookie.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // Password validation
    if (password !== confirmPassword) {
      return res.status(401).json({ error: "Passwords didn't match" });
    }

    // Check if user already exists
    const isUser = await ChatUser.findOne({ username });
    if (isUser) {
      return res.status(401).json({ error: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //genrate avatar based on gender and set it to username
    const getBoyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const getGirlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // Create new user
    const newUser = new ChatUser({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? getBoyProfile : getGirlProfile,
    });

    if (newUser) {
      // Save user to database
      await newUser.save();

      // Generate token and set cookie
      genTokenSetCookie(newUser._id, res);

      // Respond with user details (excluding password)
      return res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(500).json({ error: "Invalid User Data" });
    }
  } catch (err) {
    console.error("Error in signup controller:", err.message);
    return res
      .status(500)
      .json({ error: `Internal Server Error: ${err.message}` });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await ChatUser.findOne({ username });
    const isPassword = bcrypt.compare(password, ChatUser?.password || "");
    if (!isUser || !isPassword) {
      res.status(500).json({ error: "Invalid credientials" });
    } else {
      genTokenSetCookie(isUser._id, res);
      res.status(200).json({
        _id: isUser._id,
        fullName: isUser.fullName,
        profilePic: isUser.profilePic,
      });
    }
  } catch (err) {
    console.log("Error in Login controller: ", err.message);
    res.status(401).json({ error: "Interal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    const jwt = req.cookies.jwt;
    console.log("logged out");
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in logout controller: ", err.message);
    res.status(501).json({ error: "Internal Server Error" });
  }
};
