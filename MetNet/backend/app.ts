import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasksRouter.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);

export default app;
