import { usePokemon } from '../hooks/usePokemon';
import PokemonCards from './PokemonCards';

export function ListPokemons() {
  const {
    onePokemon,
    listPokemons,
    setIsModalOpen,
    showList,
    setPokemonDetail,
  } = usePokemon();
  if (onePokemon) {
    return (
      <PokemonCards
        pokemonDataList={[onePokemon]}
        setIsModalOpen={setIsModalOpen}
        showList={showList}
        setPokemonDetail={setPokemonDetail}
      />
    );
  } else {
    return (
      <PokemonCards
        pokemonDataList={listPokemons}
        setIsModalOpen={setIsModalOpen}
        showList={showList}
        setPokemonDetail={setPokemonDetail}
      />
    );
  }
}
