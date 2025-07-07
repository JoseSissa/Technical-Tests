import { useTodoReducer } from "../hooks/useTodoReducer";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const { state, removeTodo, completedTodo, createTodo, updateTextTodo, deleteTodoCompleted, filterAllTodos, filterActiveTodos, filterCompletedTodos } = useTodoReducer()

    return (
        <TodoContext.Provider value={{ todos: state, removeTodo, completedTodo, createTodo, updateTextTodo, deleteTodoCompleted, filterAllTodos, filterActiveTodos, filterCompletedTodos }}>
            {children}
        </TodoContext.Provider>
    )
}