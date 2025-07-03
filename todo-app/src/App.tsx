import { useState } from 'react'
import './App.css'
import { mockTodos } from './mocks/todos'
import { Todos } from './components/Todos'
import type { TodoID } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './utils/const'

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filteredTodos, setFilteredTodos] = useState(mockTodos)

  const handleRemove = (id: TodoID) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setFilteredTodos(updatedTodos)
    setTodos(updatedTodos)
  }

  const handleCompletedTodo = (id: TodoID) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(updatedTodos)
    setFilteredTodos(updatedTodos)
  }

  const handleFilter = (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => {
    if (filter === TODO_FILTERS.ALL) {
      setFilteredTodos(todos)
    }
    else if (filter === TODO_FILTERS.ACTIVE) {
      setFilteredTodos(todos.filter((todo) => todo.completed === false))
    }
    else if (filter === TODO_FILTERS.COMPLETED) {
      setFilteredTodos(todos.filter((todo) => todo.completed === true))
    }
  }

  const deleteTodoCompleted = () => {
    const result = confirm('Do you want to delete all completed todos?')
    if (result) {
      const updatedTodos = todos.filter((todo) => todo.completed === false)
      setTodos(updatedTodos)
      setFilteredTodos(updatedTodos)
    }
  }

  return (
    <>
      <h1>todo mvc</h1>
      <Todos todos={filteredTodos} handleRemove={handleRemove} handleCompletedTodo={handleCompletedTodo} />
      <Footer handleFilter={handleFilter} deleteTodoCompleted={deleteTodoCompleted} />
    </>
  )
}

export default App
