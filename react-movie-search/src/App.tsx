import { useState } from 'react'
import './App.css'
import { useGetMovieByName } from './hooks/useGetMovieByName'



function App() {
  const [search, setSearch] = useState('')
  const { movieData, getDataMovie } = useGetMovieByName()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getDataMovie({ movie: search })
  }

  return (
    <div>
      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="search">
            Search movie
            <input type='text' id="search" placeholder='Avengers, The Matrix, etc' value={search} onChange={(e) => setSearch(e.target.value)} />
          </label>
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {
          movieData && (
            <ul>
              {
                movieData.map((movie) => {
                  return (
                    <li key={movie.imdbID}>
                      <h2>{movie.Title}</h2>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </main>
    </div>
  )
}

export default App
