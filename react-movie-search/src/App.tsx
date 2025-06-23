import { useState } from 'react'
import './App.css'
import { useGetMovieByName } from './hooks/useGetMovieByName'
import { ListOfMovies, NoMoviesResult } from './components/Movies'
import { useControlInput } from './hooks/useControlInput'


function App() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)
  const { movieData, getDataMovie, loading } = useGetMovieByName({ search, sort })
  const { error } = useControlInput(search)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getDataMovie({ search })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    // Validation: If the search starts with space, do nothing
    if (search.startsWith(' ')) return
    setSearch(e.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="search">
            Search movie
            <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} type='text' id="search" placeholder='Avengers, The Matrix, etc' value={search} onChange={handleSearch} />
            <input type="checkbox" name="check" id="check" onChange={handleSort} checked={sort} />
          </label>
          <button type='submit' disabled={search.length < 3 || error !== ''}>Search</button>
        </form>
      </header>

      <main>
        {
          error && <span style={{ color: 'red' }}>{error}</span>
        }
        {
          loading && <p>Loading...</p>
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
