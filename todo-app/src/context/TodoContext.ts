import { createContext } from "react";
import type { TodoContextType } from "../types";

// Creation of context
export const TodoContext = createContext<TodoContextType>({
    todos: [],
    removeTodo: () => { },
    completedTodo: () => { },
    createTodo: () => { },
    updateTextTodo: () => { },
    deleteTodoCompleted: () => { },
    filterAllTodos: () => { },
    filterActiveTodos: () => { },
    filterCompletedTodos: () => { }
})