import { useState } from 'react'
import { API_KEY } from '../config';

interface MovieData {
    [key: string]: string;
}

export function useGetMovieByName() {
    const [movieData, setMovieData] = useState<Array<MovieData> | null>(null)

    const getDataMovie = ({ movie }: { movie: string }) => {
        // fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`) --> Get one movie
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
            .then((res) => {
                if (!res.ok) throw new Error('Something went wrong')
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setMovieData(data.Search)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return { movieData, getDataMovie }
}
