import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string("Title is required and must be a string")
    .min(3, "Title must be at least 3 characters long.")
    .max(30, "Title must be at most 30 characters long."),
  description: z
    .string("Description is required and must be a string")
    .min(10, "Description must be at least 10 characters long.")
    .max(100, "Description must be at most 100 characters long."),
  status: z.literal(["pending", "completed"]),
});
