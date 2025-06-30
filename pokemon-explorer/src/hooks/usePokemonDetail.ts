import { useState, useEffect } from 'react'
import { usePokemon } from './usePokemon'
import type { PokemonDetail } from "../types/types"
import { NUM_POKEMON_PER_PAGE } from '../config/config'

export function usePokemonDetail({ page }: { page: number }) {
    const { pokemonURL } = usePokemon()
    const [pokemonByPage, setPokemonByPage] = useState<PokemonDetail[]>([])

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const urlsToFetchData = page === 1
                ? pokemonURL.slice(0, page * NUM_POKEMON_PER_PAGE)
                : pokemonURL.slice((page - 1) * NUM_POKEMON_PER_PAGE, page * NUM_POKEMON_PER_PAGE)
            const response = await Promise.allSettled(urlsToFetchData.map(url => fetch(url).then(res => res.json())))
            const pokemonData = response.map(result => result.status === 'fulfilled' ? result.value : null)
            setPokemonByPage(prevState => [...prevState, ...pokemonData])
        }
        fetchPokemonDetails()
    }, [pokemonURL, page])

    return { pokemonByPage }
}