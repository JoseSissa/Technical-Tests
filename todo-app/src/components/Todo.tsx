import { useState } from 'react'
import type { TodoType } from '../types'
import { useTodo } from '../hooks/useTodo'


export const Todo: React.FC<TodoType> = ({ id, text, completed }) => {
    const [input, setInput] = useState(text)
    const [updateInput, setUpdateInput] = useState(false)
    const { removeTodo, completedTodo, updateTextTodo } = useTodo()

    const handleDoubleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setUpdateInput(true)
    }

    const handleSave = () => {
        updateTextTodo(id, input)
        setUpdateInput(false)
    }

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => completedTodo(id)} />
            <label>
                <input onDoubleClick={handleDoubleClick} onChange={(e) => setInput(e.target.value)} type="text" value={input} readOnly={!updateInput} />
            </label>
            {
                updateInput
                    ? <button onClick={handleSave}>Save</button>
                    : <button onClick={() => removeTodo(id)}>Delete</button>
            }
        </div>
    )
}