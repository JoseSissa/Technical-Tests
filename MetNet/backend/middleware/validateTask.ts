import type { Request, Response, NextFunction } from "express";
import { taskSchema } from "../schema/taskValidation.ts";
import { z } from "zod";

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = taskSchema.parse(req.body);
    console.log(result);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Invalid task data",
        errors: error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }
    res.status(500).json({ message: "Error validating task data with zod." });
  }
};
