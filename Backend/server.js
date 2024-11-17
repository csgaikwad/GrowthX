import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/api/test", (req, res) => {
  return res.json({ message: "server is ready" });
});
app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
