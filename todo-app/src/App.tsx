import { useState } from 'react'
import './App.css'
import { mockTodos } from './mocks/todos'
import { Todos } from './components/Todos'
import type { TodoID } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './utils/const'

function App() {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: TodoID) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleCompletedTodo = (id: TodoID) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(updatedTodos)
  }

  const handleFilter = (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => {
    if (filter === TODO_FILTERS.ALL) {
      setTodos(mockTodos)
    }
    else if (filter === TODO_FILTERS.ACTIVE) {
      setTodos(mockTodos.filter((todo) => todo.completed === false))
    }
    else if (filter === TODO_FILTERS.COMPLETED) {
      setTodos(mockTodos.filter((todo) => todo.completed === true))
    }
  }

  return (
    <>
      <h1>todo mvc</h1>
      <Todos todos={todos} handleRemove={handleRemove} handleCompletedTodo={handleCompletedTodo} />
      <Footer handleFilter={handleFilter} />
    </>
  )
}

export default App
