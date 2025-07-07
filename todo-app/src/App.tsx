import { useState } from 'react'
import './App.css'
import { mockTodos } from './mocks/todos'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TODO_FILTERS } from './utils/const'
import type { TodoID } from './types'

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [, setFilteredTodos] = useState(mockTodos)

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

  const handleCreateTodo = (newTodo: string) => {
    const newID = todos.length + 1
    const updatedTodos = [...todos, { id: newID, text: newTodo, completed: false }]
    setTodos(updatedTodos)
    setFilteredTodos(updatedTodos)
  }

  const handleUpdateTextTodo = (id: TodoID, newText: string) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, text: newText } : todo)
    setTodos(updatedTodos)
    setFilteredTodos(updatedTodos)
  }

  return (
    <>
      <Header handleCreateTodo={handleCreateTodo} />
      <h1>todo mvc</h1>
      <Todos handleUpdateTextTodo={handleUpdateTextTodo} />
      <Footer handleFilter={handleFilter} deleteTodoCompleted={deleteTodoCompleted} />
    </>
  )
}

export default App
