import type { TodoID, TodoType } from '../types'
import { Todo } from './Todo'
import { useTodo } from '../hooks/useTodo'

interface Props {
    handleUpdateTextTodo: (id: TodoID, newText: string) => void
}

export const Todos: React.FC<Props> = ({ handleUpdateTextTodo }) => {
    const { todos } = useTodo()
    return (
        <ul>
            {todos.map((todo: TodoType) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <Todo id={todo.id} text={todo.text} completed={todo.completed} handleUpdateTextTodo={handleUpdateTextTodo} />
                </li>
            ))}
        </ul>
    )
}