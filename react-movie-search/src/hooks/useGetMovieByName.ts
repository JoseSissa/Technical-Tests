import { useMemo, useRef, useState, useCallback } from 'react'
import type { MovieData } from '../types/types';
import { SearchMovies } from '../services/movies';

export function useGetMovieByName({ search, sort }: { search: string, sort: boolean }) {
    const [movieData, setMovieData] = useState<Array<MovieData>>([])
    const [loading, setLoading] = useState(false)
    const prevSearch = useRef(search)

    // useCallback is the same that useMemo but with best sintax
    const getDataMovie = useCallback(async ({ search }: { search: string }) => {
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
    }, [])

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movieData]?.sort((a, b) => a.title.localeCompare(b.title))
            : movieData
    }, [sort, movieData])

    return { movieData: sortedMovies, getDataMovie, loading }
}
