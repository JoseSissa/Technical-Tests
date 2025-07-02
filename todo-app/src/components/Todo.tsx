import type { TodoType } from '../types'

interface Props extends TodoType {
    handleRemove: (id: number) => void
    handleCompletedTodo: (id: number) => void
}

export const Todo: React.FC<Props> = ({ id, text, completed, handleRemove, handleCompletedTodo }) => {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => handleCompletedTodo(id)} />
            <label>{text}</label>
            <button onClick={() => handleRemove(id)}>Delete</button>
        </div>
    )
}