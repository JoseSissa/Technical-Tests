import type { TodoType } from '../types'
import { Todo } from './Todo'
import { useTodo } from '../hooks/useTodo'

export const Todos: React.FC = () => {
    const { todos } = useTodo()

    return (
        <ul>
            {todos.map((todo: TodoType) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <Todo id={todo.id} text={todo.text} completed={todo.completed} />
                </li>
            ))}
        </ul>
    )
}