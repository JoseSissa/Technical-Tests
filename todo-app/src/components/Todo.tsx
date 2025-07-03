import { useState } from 'react'
import type { TodoID, TodoType } from '../types'

interface Props extends TodoType {
    handleRemove: (id: TodoID) => void
    handleCompletedTodo: (id: TodoID) => void
    handleUpdateTextTodo: (id: TodoID, newText: string) => void
}

export const Todo: React.FC<Props> = ({ id, text, completed, handleRemove, handleCompletedTodo, handleUpdateTextTodo }) => {
    const [input, setInput] = useState(text)
    const [updateInput, setUpdateInput] = useState(false)

    const handleDoubleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setUpdateInput(true)
    }

    const handleSave = () => {
        handleUpdateTextTodo(id, input)
        setUpdateInput(false)
    }

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => handleCompletedTodo(id)} />
            <label>
                <input onDoubleClick={handleDoubleClick} onChange={(e) => setInput(e.target.value)} type="text" value={input} readOnly={!updateInput} />
            </label>
            {
                updateInput
                    ? <button onClick={handleSave}>Save</button>
                    : <button onClick={() => handleRemove(id)}>Delete</button>
            }
        </div>
    )
}