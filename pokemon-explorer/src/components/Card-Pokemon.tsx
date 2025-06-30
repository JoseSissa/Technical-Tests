import { useModal } from "../hooks/useModal"
import type { PokemonDetail } from "../types/types"

export function CardPokemon({ pokemonList }: { pokemonList: PokemonDetail[] }) {

    const { openModal } = useModal()

    return (
        pokemonList ? (
            <ul className="pokemon-list__grid">
                {pokemonList.map(pokemon => {
                    return (
                        <li key={pokemon.id}>
                            <span>{pokemon.id}</span>
                            <img src={`${pokemon.sprites.other['official-artwork'].front_default}`} alt={`Image of ${pokemon.name}`} />
                            <h2>{pokemon.name}</h2>
                            <button onClick={() => openModal(pokemon)}>
                                Details
                            </button>
                        </li>
                    )
                })}
            </ul>
        ) : <div>Any pokemon found.</div>
    )
}