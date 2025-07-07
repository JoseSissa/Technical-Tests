// .d.ts --> TypeScript declaration file / This file won't have logic code, only declarations.

type TodoID = number
type TodoText = string
type TodoCompleted = boolean
export interface TodoType {
    id: TodoID
    text: TodoText
    completed: TodoCompleted
}

export interface TodoContextType {
    todos: TodoType[]
    removeTodo: (id: TodoID) => void
    completedTodo: (id: TodoID) => void
    createTodo: (text: string) => void
    updateTextTodo: (id: TodoID, text: TodoText) => void
    deleteTodoCompleted: () => void
    filterAllTodos: () => void
    filterActiveTodos: () => void
    filterCompletedTodos: () => void
}