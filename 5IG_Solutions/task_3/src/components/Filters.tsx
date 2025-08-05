import { usePokemon } from '../hooks/usePokemon';

const POKEMON_TYPES = [
  'Ver todos',
  'Normal',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dragon',
  'Steel',
  'Fairy',
];

export const Filters = () => {
  const { getPokemonsByType } = usePokemon();

  return (
    <ul className="flex items-center gap-2 lg:gap-3 flex-wrap max-w-7xl mx-auto mt-4 px-6">
      {POKEMON_TYPES.map((type) => (
        <li key={type}>
          <button
            onClick={() =>
              getPokemonsByType(
                type !== 'Ver todos' ? type.toLowerCase() : 'all'
              )
            }
            className={`px-4 py-1 rounded-2xl ${type !== 'Ver todos' ? type.toLowerCase() : 'all'} font-[500] capitalize cursor-pointer shadow-xl`}
          >
            {type}
          </button>
        </li>
      ))}
    </ul>
  );
};
