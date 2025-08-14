import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import routes
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/blogs", blogRoutes);  // Blog-related routes
app.use("/admin", authRoutes);  // Auth-related routes

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
