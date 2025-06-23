import type { MovieData } from "../types/types"

export function ListOfMovies({ movieData }: { movieData: Array<MovieData> }) {
    return (
        <ul className="movies">
            {
                movieData.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.year}</p>
                            <img src={movie.poster} alt={`Poster of ${movie.title}`} />
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