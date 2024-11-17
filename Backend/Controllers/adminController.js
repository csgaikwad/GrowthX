import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../Models/Admin.js";
import { generateToken } from "../Config/auth.js";


export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });

    await newAdmin.save();
    res.status(201).json({ msg: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = generateToken(admin._id,admin.username);
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
