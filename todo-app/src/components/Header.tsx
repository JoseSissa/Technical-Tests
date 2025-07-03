import { useState } from "react"

interface Props {
    handleCreateTodo: (newTodo: string) => void
}

export const Header: React.FC<Props> = ({ handleCreateTodo }) => {
    const [input, setInput] = useState('')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const target = e.target as HTMLFormElement
        // const formData = new FormData(target);
        // const formValues = Object.fromEntries(formData.entries());
        // console.log(formData.get('todo-text'))
        // console.log(formValues)
        handleCreateTodo(input)
        setInput('')
    }
    return (
        <header>
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input name="todo-text" value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="What needs to be done?" />
                <button type="submit">Add</button>
            </form>
        </header>
    )
}