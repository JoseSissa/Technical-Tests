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
      const { title, description, status } = task;
      const newTask = db
        .prepare(
          "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)"
        )
        .run(title, description, status);
      return newTask;
    } catch (error) {
      throw error;
    }
  }

  static async updateTask(id: string, task: Task) {
    try {
      const { title, description, status } = task;
      const updatedTask = db
        .prepare(
          "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?"
        )
        .run(title, description, status, id);
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
