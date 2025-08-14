import { Router } from "express";
import { TasksController } from "../controllers/tasksController.ts";
import { validateTask } from "../middleware/validateTask.ts";

const tasksRouter = Router();

tasksRouter.get("/", (req, res, next) => {
  TasksController.getTasks(req, res, next);
});

tasksRouter.post("/", validateTask, (req, res, next) => {
  TasksController.createTask(req, res, next);
});

tasksRouter.put("/:id", validateTask, (req, res, next) => {
  TasksController.updateTask(req, res, next);
});

tasksRouter.delete("/:id", (req, res, next) => {
  TasksController.deleteTask(req, res, next);
});

export default tasksRouter;
