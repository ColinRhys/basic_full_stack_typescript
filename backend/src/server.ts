// src/server.ts

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import issueRoutes from "./routes/issueRoutes";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", issueRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
