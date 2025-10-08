import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();

// Initialize app
const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", authRoutes);

// ---------------------- Deployment Setup ---------------------- //
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend (React build)
if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, "../Client/dist"); // or "../Client/build" for CRA
  app.use(express.static(clientPath));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(clientPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
// --------------------------------------------------------------- //

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
