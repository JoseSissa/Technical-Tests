import { useReducer } from "react";
import { todoInitialState, todoReducer } from "../reducers/todo";

export function useTodoReducer() {
    const [state, dispatch] = useReducer(todoReducer, todoInitialState);

    const removeTodo = (id: number) => dispatch({ type: "REMOVE_TODO", payload: id });

    const completedTodo = (id: number) => dispatch({ type: "COMPLETED_TODO", payload: id });

    return { state, removeTodo, completedTodo };
}