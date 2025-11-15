import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

// Main router
app.use("/api", router);

// Global error handler
app.use(errorHandler);

export default app;
