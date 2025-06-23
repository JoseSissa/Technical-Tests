import { API_KEY } from "../config"
import type { MovieData } from "../types/types"

export async function SearchMovies(search: string) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()
        return data.Search.map((movie: MovieData) => ({
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            poster: movie.Poster,
        }))
    } catch (error) {
        throw new Error('Error getting movies')
    }
}