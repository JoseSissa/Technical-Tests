import type { PokemonDetail } from '../types/types';

export default function Modal({
  setIsModalOpen,
  infoPokemonDetail,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
  infoPokemonDetail: PokemonDetail | null;
}) {
  const getStatName = (statName: string) => {
    if (statName === 'hp') {
      return 'HP';
    } else if (statName === 'attack') {
      return 'Attack';
    } else if (statName === 'defense') {
      return 'Defense';
    } else if (statName === 'special-attack') {
      return 'Sp. Atk';
    } else if (statName === 'special-defense') {
      return 'Sp. Def';
    } else if (statName === 'speed') {
      return 'Speed';
    } else {
      return statName;
    }
  };

  const getClassNameStat = (statName: string) => {
    if (statName === 'hp') {
      return 'bg-red-500';
    } else if (statName === 'attack') {
      return 'bg-blue-500';
    } else if (statName === 'defense') {
      return 'bg-green-500';
    } else if (statName === 'special-attack') {
      return 'bg-yellow-500';
    } else if (statName === 'special-defense') {
      return 'bg-purple-500';
    } else if (statName === 'speed') {
      return 'bg-orange-500';
    } else {
      return 'bg-gray-500';
    }
  };

  return (
    <>
      {infoPokemonDetail && (
        <section className="fixed left-1/2 -translate-x-1/2 px-5 py-5 w-full max-w-7xl h-full bg-[#ececec] z-20">
          <button
            className="absolute top-7 right-7 p-2 text-black font-[500]"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="m291-208-83-83 189-189-189-189 83-83 189 189 189-189 83 83-189 189 189 189-83 83-189-189-189 189Z" />
            </svg>
          </button>
          <div className="flex flex-col justify-center items-center w-full h-full bg-white rounded-xl shadow-lg">
            <div className="flex justify-center items-center aspect-square h-full max-h-[250px]">
              <img
                className="drop-shadow-[0px_6px_4px_black]"
                // src={infoPokemonDetail.sprites.other['showdown'].front_default}
                src={infoPokemonDetail.sprites.other['home'].front_default}
                alt={infoPokemonDetail.name}
              />
            </div>
            <h2 className="mb-4 text-2xl font-[700] capitalize">
              {infoPokemonDetail.name}
            </h2>
            <div className="mb-5">
              {infoPokemonDetail.types.map((type) => (
                <span
                  className={`${type.type.name} px-4 rounded-2xl capitalize font-[500]`}
                  key={type.type.name}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center gap-5 text-center mb-6">
              <div className="font-[500]">
                Height
                <span className="block mt-3 px-6 py-1 bg-gray-300 rounded-2xl">
                  {infoPokemonDetail.height / 10} m
                </span>
              </div>
              <div className="font-[500]">
                Weight
                <span className="block mt-3 px-6 py-1 bg-gray-300 rounded-2xl">
                  {infoPokemonDetail.weight / 10} kg
                </span>
              </div>
            </div>
            {/* abilities */}
            <div className="text-center mb-5 font-[500]">
              <h2>Abilities</h2>
              <div className="flex justify-center items-center gap-5 capitalize flex-wrap">
                {infoPokemonDetail.abilities.map((ability) => (
                  <span
                    className="inline-block mt-3 px-4 py-1 bg-gray-300 rounded-2xl"
                    key={ability.ability.name}
                  >
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>
            {/* stats */}
            <div className="w-full text-center font-[500]">
              <h2>Stats</h2>
              <div className="mt-3">
                {infoPokemonDetail.stats.map((stat) => (
                  <div
                    className="flex justify-center items-center mb-2 px-5"
                    key={stat.stat.name}
                  >
                    <span className="block w-[120px] text-left">
                      {getStatName(stat.stat.name)}
                    </span>
                    <div className="w-full h-[6px] bg-[#ececec] rounded-full shadow-lg">
                      <div
                        className={`h-full ${getClassNameStat(stat.stat.name)} rounded-full`}
                        style={{
                          width: `${(stat.base_stat * 100) / 255}%`,
                        }}
                      ></div>
                    </div>
                    <span className="block w-[60px] text-right">
                      {stat.base_stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
