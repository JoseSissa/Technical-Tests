import { usePokemon } from '../hooks/usePokemon';

export function LoadMorePokemons() {
  const { onePokemon, page, setPage, pokemonsByType } = usePokemon();

  const handlePage = () => {
    const newPage = page + 1;
    setPage(newPage);
  };

  if (onePokemon !== null) return;
  if (pokemonsByType !== 'all') return;
  return (
    <button
      className="block mx-auto mb-8 border shadow-lg px-2 py-1 font-[500] rounded-sm bg-white cursor-pointer"
      onClick={handlePage}
    >
      Load more Pokemons
    </button>
  );
}
