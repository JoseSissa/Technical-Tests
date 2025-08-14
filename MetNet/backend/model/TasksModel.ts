import type { Task } from "../types/types.ts";
import db from "../db/connection.ts";

export class TasksModel {
  static async getTasks() {
    try {
      const tasks = db.prepare("SELECT * FROM tasks").all();
      return tasks;
    } catch (error) {
      throw error;
    }
  }

  static async createTask(task: Task) {
    try {
      const { title, description } = task;
      const newTask = db
        .prepare("INSERT INTO tasks (title, description) VALUES (?, ?)")
        .run(title, description);
      return newTask;
    } catch (error) {
      throw error;
    }
  }

  static async updateTask(id: string, task: Task) {
    try {
      const { title, description } = task;
      const updatedTask = db
        .prepare("UPDATE tasks SET title = ?, description = ? WHERE id = ?")
        .run(title, description, id);
      return updatedTask;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTask(id: string) {
    try {
      const deletedTask = db.prepare("DELETE FROM tasks WHERE id = ?").run(id);
      return deletedTask;
    } catch (error) {
      throw error;
    }
  }
}
