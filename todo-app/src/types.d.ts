// .d.ts --> TypeScript declaration file / This file won't have logic code, only declarations.

type TodoID = number
type TodoText = string
type TodoCompleted = boolean
export interface TodoType {
    id: TodoID
    text: TodoText
    completed: TodoCompleted
}