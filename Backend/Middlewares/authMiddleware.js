import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
