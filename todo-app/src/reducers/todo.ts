import { mockTodos } from "../mocks/todos";

export const todoInitialState = mockTodos;

type Action = {
    type: string;
    payload: number;
};

export const todoReducer = (state: typeof todoInitialState, action: Action) => {
    const { type, payload } = action;

    if (type === "REMOVE_TODO") {
        return state.filter(todo => todo.id !== payload);
    } else if (type === "COMPLETED_TODO") {
        return state.map(todo => todo.id === payload ? { ...todo, completed: !todo.completed } : todo);
    }


    throw Error('Unknown action.');
}
