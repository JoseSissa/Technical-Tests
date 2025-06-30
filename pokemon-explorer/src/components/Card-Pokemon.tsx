import type { PokemonDetail } from "../types/types"

export function CardPokemon({ pokemonList, handleModal }: { pokemonList: PokemonDetail[], handleModal: (pokemon: PokemonDetail) => void }) {
    return (
        pokemonList ? (
            <ul className="pokemon-list__grid">
                {pokemonList.map(pokemon => {
                    return (
                        <li key={pokemon.id}>
                            <span>{pokemon.id}</span>
                            <img src={`${pokemon.sprites.other['official-artwork'].front_default}`} alt={`Image of ${pokemon.name}`} />
                            <h2>{pokemon.name}</h2>
                            <button onClick={() => handleModal(pokemon)}>
                                Details
                            </button>
                        </li>
                    )
                })}
            </ul>
        ) : <div>No...</div>
    )
}