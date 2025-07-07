import { useReducer } from "react";
import { todoInitialState, todoReducer } from "../reducers/todo";

export function useTodoReducer() {
    const [state, dispatch] = useReducer(todoReducer, todoInitialState);

    const removeTodo = (id: number) => dispatch({ type: "REMOVE_TODO", payload: { id } });

    const completedTodo = (id: number) => dispatch({ type: "COMPLETED_TODO", payload: { id } });

    const createTodo = (text: string) => dispatch({ type: "CREATE_TODO", payload: { text } });

    const updateTextTodo = (id: number, text: string) => dispatch({ type: "UPDATE_TEXT_TODO", payload: { id, text } });

    const deleteTodoCompleted = () => dispatch({ type: "DELETE_TODOS_COMPLETED", payload: null });

    const filterAllTodos = () => dispatch({ type: "FILTER_ALL_TODOS", payload: null });

    const filterActiveTodos = () => dispatch({ type: "FILTER_ACTIVE_TODOS", payload: null });

    const filterCompletedTodos = () => dispatch({ type: "FILTER_COMPLETED_TODOS", payload: null });

    return { state, removeTodo, completedTodo, createTodo, updateTextTodo, deleteTodoCompleted, filterAllTodos, filterActiveTodos, filterCompletedTodos };
}