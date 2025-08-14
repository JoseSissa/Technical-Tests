import type { Request, Response, NextFunction } from "express";
import { TasksModel } from "../model/TasksModel.ts";

export class TasksController {
  static async getTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await TasksModel.getTasks();
      res.status(200).json(tasks);
    } catch (error) {
      console.error("Error to get tasks:", error);
      res.status(500).json({ message: "Error getting tasks." });
    }
  }

  static async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const newTask = await TasksModel.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      console.error("Error to create task:", error);
      res.status(500).json({ message: "Error creating task." });
    }
  }

  static async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedTask = await TasksModel.updateTask(req.params.id, req.body);
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error("Error to update task:", error);
      res.status(500).json({ message: "Error updating task." });
    }
  }

  static async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedTask = await TasksModel.deleteTask(req.params.id);
      res.status(200).json(deletedTask);
    } catch (error) {
      console.error("Error to delete task:", error);
      res.status(500).json({ message: "Error deleting task." });
    }
  }
}
