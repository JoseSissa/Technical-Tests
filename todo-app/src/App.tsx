import { useState } from 'react'
import './App.css'
import { mockTodos } from './mocks/todos'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleCompletedTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>todo mvc</h1>
      <Todos todos={todos} handleRemove={handleRemove} handleCompletedTodo={handleCompletedTodo} />
    </>
  )
}

export default App
