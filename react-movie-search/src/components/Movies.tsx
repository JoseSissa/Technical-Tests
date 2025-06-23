import type { MovieData } from "../types/types"

export function ListOfMovies({ movieData }: { movieData: Array<MovieData> }) {
    return (
        <ul className="movies">
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

export function NoMoviesResult() {
    return (
        <p>No movies found</p>
    )
}