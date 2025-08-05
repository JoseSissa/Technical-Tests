import type { Stat } from '../../types/types';

const STATS_PROPS = {
  hp: {
    name: 'HP',
    color: 'bg-red-500',
  },
  attack: {
    name: 'Attack',
    color: 'bg-blue-500',
  },
  defense: {
    name: 'Defense',
    color: 'bg-green-500',
  },
  'special-attack': {
    name: 'Sp. Atk',
    color: 'bg-yellow-500',
  },
  'special-defense': {
    name: 'Sp. Def',
    color: 'bg-purple-500',
  },
  speed: {
    name: 'Speed',
    color: 'bg-orange-500',
  },
};

export const Stats = ({ stats }: { stats: Stat[] }) => {
  return stats.map((stat) => (
    <div
      className="flex justify-center items-center mb-2 px-5"
      key={stat.stat.name}
    >
      <span className="block w-[120px] text-left">
        {STATS_PROPS[stat.stat.name as keyof typeof STATS_PROPS].name}
      </span>
      <div className="w-full h-[6px] bg-[#ececec] rounded-full shadow-lg">
        <div
          className={`h-full ${STATS_PROPS[stat.stat.name as keyof typeof STATS_PROPS].color} rounded-full`}
          style={{
            width: `${(stat.base_stat * 100) / 255}%`,
          }}
        ></div>
      </div>
      <span className="block w-[60px] text-right">{stat.base_stat}</span>
    </div>
  ));
};
