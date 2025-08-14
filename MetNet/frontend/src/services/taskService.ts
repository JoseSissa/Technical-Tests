import type { Task } from "../types/types";
import { API_URL } from "../config";

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return res.json();
}

export async function createTask(task: Omit<Task, "id">): Promise<Task> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error("Error al crear tarea 1");
    return res.json();
  } catch (error) {
    throw new Error(`Error al crear tarea 2: ${error}`);
  }
}

export async function updateTask(
  id: number,
  task: Partial<Task>
): Promise<Task> {
  try {
    const result = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    const response = await result.json();
    if (!result.ok) {
      console.log({ response });

      throw new Error(
        `Error to update the state 1: ${result.status}: ${result.statusText} - ${response}`
      );
    }
    return response;
  } catch (error) {
    throw new Error(`Error to update the state 2: ${error}`);
  }
}

export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar tarea");
}
