import type { PokemonDetail } from '../types/types.d';
import { usePokemon } from '../hooks/usePokemon';
import { Loading } from './Loading';
import { Error } from './Error';

type PokemonCardsProps = {
  pokemonDataList: PokemonDetail[];
};
export default function PokemonCards({ pokemonDataList }: PokemonCardsProps) {
  const { setIsModalOpen, setPokemonDetail, showList } = usePokemon();
  const handleMoreDetails = (pokemon: PokemonDetail) => {
    setIsModalOpen(true);
    setPokemonDetail(pokemon);
  };

  return (
    <section className="relative max-w-7xl w-full flex-grow mx-auto p-6">
      <Loading />
      <Error />
      {pokemonDataList.length === 1 && (
        <button
          onClick={showList}
          className="block mx-auto mb-8 border shadow-lg px-2 py-1 font-[500] rounded-sm bg-white cursor-pointer"
        >
          Show List
        </button>
      )}

      <ul className="pokemon-list__grid">
        {pokemonDataList.map((pokemon) => (
          <li
            className="relative w-full max-w-56 p-2 rounded-xl bg-white shadow-lg"
            key={pokemon.id}
          >
            <div
              className={`flex justify-center items-center w-full aspect-square rounded-xl ${pokemon.types[0].type.name}`}
            >
              <img
                className="max-w-20 lg:max-w-32 pt-6 pb-2 z-10 drop-shadow-[0px_6px_4px_black]"
                src={`${pokemon.sprites.other['official-artwork'].front_default}`}
                alt={`Image of ${pokemon.name}`}
              />
            </div>
            <p className="pokemon-id-back text-shadow-lg">#{pokemon.id}</p>
            <h2 className="mt-2 capitalize font-[700]">{pokemon.name}</h2>
            <div className="flex justify-center items-center gap-2 max-w-full mt-2 flex-wrap">
              {pokemon.types.map((type) => (
                <span
                  className={`${type.type.name} px-3 rounded-2xl capitalize font-[500] text-xs`}
                  key={type.type.name}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <button
              className="mt-2 text-xs font-[500] cursor-pointer underline"
              onClick={() => handleMoreDetails(pokemon)}
            >
              Details
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
