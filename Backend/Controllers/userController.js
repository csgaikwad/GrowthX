import bcrypt from "bcryptjs";
import User from "../Models/User.js";
import { generateToken } from "../Config/auth.js";
import Assignment from "../Models/Assignment.js";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = generateToken(user._id,user.username);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const uploadAssignment = async (req, res) => {
  const { task, admin } = req.body;
  const userId = req.userData.id;

  try {
    const newAssignment = new Assignment({ userId, task, admin });
    await newAssignment.save();
    res.status(201).json({ msg: "Assignment uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
