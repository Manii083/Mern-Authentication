// import express from "express";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.js";
// import { connectDB } from "./config/db.js";

// dotenv.config();
// const app = express();
// app.use(express.json());

// app.use("/api/users", authRoutes);


// connectDB();
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// --- API routes ---
app.use("/api/users", authRoutes);

// --- Serve React build in production ---
if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "../client/dist"); // Vite build folder
  app.use(express.static(clientBuildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

// --- Connect to MongoDB ---
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


