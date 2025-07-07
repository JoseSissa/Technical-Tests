import { mockTodos } from "../mocks/todos";

export const todoInitialState = mockTodos;

// TODO: Check types of payload
// type Action = {
//     type: string;
//     payload: { id: number } | { text: string } | { id: number, text: string };
// };

export const todoReducer = (state: typeof todoInitialState, action) => {
    const { type, payload } = action;

    if (type === "REMOVE_TODO") {
        return state.filter(todo => todo.id !== payload.id);
    } else if (type === "COMPLETED_TODO") {
        return state.map(todo => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);
    } else if (type === "CREATE_TODO") {
        const newID = state.length + 1;
        return [...state, { id: newID, text: payload.text, completed: false }];
    } else if (type === "UPDATE_TEXT_TODO") {
        return state.map(todo => todo.id === payload.id ? { ...todo, text: payload.text } : todo);
    } else if (type === "DELETE_TODOS_COMPLETED") {
        return state.filter(todo => todo.completed === false);
    } else if (type === "FILTER_ALL_TODOS") {
        return todoInitialState;
    } else if (type === "FILTER_ACTIVE_TODOS") {
        return state.filter(todo => todo.completed === false);
    } else if (type === "FILTER_COMPLETED_TODOS") {
        return state.filter(todo => todo.completed === true);
    }

    throw Error('Unknown action.');
}
