import { usePokemon } from '../hooks/usePokemon';
import PokemonCards from './PokemonCards';

export function ListPokemons() {
  const { onePokemon, listPokemons } = usePokemon();
  if (onePokemon) {
    return <PokemonCards pokemonDataList={[onePokemon]} />;
  } else {
    return <PokemonCards pokemonDataList={listPokemons} />;
  }
}
