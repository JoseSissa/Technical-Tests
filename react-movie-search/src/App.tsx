import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useGetMovieByName } from './hooks/useGetMovieByName'
import { ListOfMovies, NoMoviesResult } from './components/Movies'


function App() {
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const isFirstInput = useRef(true)
  const { movieData, getDataMovie } = useGetMovieByName()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getDataMovie({ movie: search })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    // Validation: If the search is empty, do nothing
    if (search.startsWith(' ')) return
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('La búsqueda no puede estar vacía')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError('')
  }, [search])

  return (
    <>
      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="search">
            Search movie
            <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} type='text' id="search" placeholder='Avengers, The Matrix, etc' value={search} onChange={handleSearch} />
          </label>
          <button type='submit' disabled={search.length < 3 || error !== ''}>Search</button>
        </form>
      </header>

      <main>
        {
          error && <span style={{ color: 'red' }}>{error}</span>
        }
        {
          movieData
            ? <ListOfMovies movieData={movieData} />
            : <NoMoviesResult />
        }
      </main>
    </>
  )
}

export default App
