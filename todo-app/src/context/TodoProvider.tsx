import { useTodoReducer } from "../hooks/useTodoReducer";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const { state, removeTodo, completedTodo } = useTodoReducer()

    return (
        <TodoContext.Provider value={{ todos: state, removeTodo, completedTodo }}>
            {children}
        </TodoContext.Provider>
    )
}