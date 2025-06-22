import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')

  return (
    <main>
      <h1>Movie Search</h1>
      <form className='form' action="">
        <input type='text' placeholder='Search movie' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </main>
  )
}

export default App
