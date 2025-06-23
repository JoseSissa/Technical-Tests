import { useState } from 'react'
import type { MovieData } from '../types/types';
import { SearchMovies } from '../services/movies';

export function useGetMovieByName() {
    const [movieData, setMovieData] = useState<Array<MovieData> | null>(null)
    const [loading, setLoading] = useState(false)

    const getDataMovie = async ({ search }: { search: string }) => {
        try {
            setLoading(true)
            const listMovies = await SearchMovies(search)
            setMovieData(listMovies)
        } catch (error: any) {
            console.log(error.message);

        } finally {
            setLoading(false)
        }
    }

    return { movieData, getDataMovie, loading }
}
