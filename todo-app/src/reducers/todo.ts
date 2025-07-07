import { mockTodos } from "../mocks/todos";

export const todoInitialState = {
    todos: mockTodos,
    filtered: mockTodos
};


type Action = {
    type: 'REMOVE_TODO';
    payload: { id: number };
} | {
    type: 'COMPLETED_TODO';
    payload: { id: number };
} | {
    type: 'CREATE_TODO';
    payload: { text: string };
} | {
    type: 'UPDATE_TEXT_TODO';
    payload: { id: number, text: string };
} | {
    type: 'DELETE_TODOS_COMPLETED';
    payload: null;
} | {
    type: 'FILTER_ALL_TODOS';
    payload: null;
} | {
    type: 'FILTER_ACTIVE_TODOS';
    payload: null;
} | {
    type: 'FILTER_COMPLETED_TODOS';
    payload: null;
};

export const todoReducer = (state: typeof todoInitialState, action: Action) => {
    const { type, payload } = action;

    // switch (type) {
    //     case "REMOVE_TODO":
    //     case "COMPLETED_TODO":
    //     case "CREATE_TODO":
    //     case "UPDATE_TEXT_TODO":
    //     case "DELETE_TODOS_COMPLETED":
    //     case "FILTER_ALL_TODOS":
    //     case "FILTER_ACTIVE_TODOS":
    //     case "FILTER_COMPLETED_TODOS":
    //         return todoReducer(state, action);
    //     default:
    //         throw Error('Unknown action.');
    // }

    if (type === "REMOVE_TODO") {
        const { id } = payload;
        const updatedState = state.todos.filter(todo => todo.id !== id);
        return { todos: updatedState, filtered: updatedState };
    }
    else if (type === "COMPLETED_TODO") {
        const { id } = payload;
        const updatedState = state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        return { todos: updatedState, filtered: updatedState };
    }
    else if (type === "CREATE_TODO") {
        const newID = state.todos.length + 1;
        const { text } = payload;
        const updatedState = [...state.todos, { id: newID, text, completed: false }];
        return { todos: updatedState, filtered: updatedState };
    }
    else if (type === "UPDATE_TEXT_TODO") {
        const { id, text } = payload;
        const updatedState = state.todos.map(todo => todo.id === id ? { ...todo, text } : todo);
        return { todos: updatedState, filtered: updatedState };
    }
    else if (type === "DELETE_TODOS_COMPLETED") {
        const updatedState = state.todos.filter(todo => todo.completed === false);
        return { todos: updatedState, filtered: updatedState };
    }
    else if (type === "FILTER_ALL_TODOS") {
        return { ...state, filtered: state.todos };
    }
    else if (type === "FILTER_ACTIVE_TODOS") {
        const filteredTodos = state.todos.filter(todo => todo.completed === false);
        return { ...state, filtered: filteredTodos };
    }
    else if (type === "FILTER_COMPLETED_TODOS") {
        const filteredTodos = state.todos.filter(todo => todo.completed === true);
        return { ...state, filtered: filteredTodos };
    }

    throw Error('Unknown action.');
}
