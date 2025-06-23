import { useRef, useState } from 'react'
import type { MovieData } from '../types/types';
import { SearchMovies } from '../services/movies';

export function useGetMovieByName({ search }: { search: string }) {
    const [movieData, setMovieData] = useState<Array<MovieData> | null>(null)
    const [loading, setLoading] = useState(false)
    const prevSearch = useRef(search)

    const getDataMovie = async () => {
        if (search === prevSearch.current) return
        try {
            setLoading(true)
            prevSearch.current = search
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
