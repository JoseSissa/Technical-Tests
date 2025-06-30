import { useState, useEffect } from 'react'
import type { Pokemon } from '../types/types'

export function usePokemon() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([])
    const [pokemonURL, setPokemonURL] = useState<string[]>([])

    useEffect(() => {
        fetch('/src/mocks/pokemons.json')
            .then(res => res.json())
            .then(data => {
                setPokemon(data.results)
                const listOfURLs = data.results.map((pokemon: Pokemon) => pokemon.url)
                setPokemonURL(listOfURLs)
            })
    }, [])

    return { pokemon, pokemonURL }
}