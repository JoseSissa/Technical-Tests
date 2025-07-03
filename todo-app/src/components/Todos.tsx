import type { TodoID, TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
    todos: TodoType[]
    handleRemove: (id: TodoID) => void
    handleCompletedTodo: (id: TodoID) => void
}

export const Todos: React.FC<Props> = ({ todos, handleRemove, handleCompletedTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <Todo id={todo.id} text={todo.text} completed={todo.completed} handleRemove={handleRemove} handleCompletedTodo={handleCompletedTodo} />
                </li>
            ))}
        </ul>
    )
}