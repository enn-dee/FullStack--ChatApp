import jwt from "jsonwebtoken";
 const genTokenSetCookie = async (userId, res) => {
  const token = jwt.sign({userId},process.env.SECRET, {
    expiresIn: "5d",
  });
  res.cookie("jwt", token, {
    maxAge: 5 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};
export default genTokenSetCookie