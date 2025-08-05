import type { Ability } from '../../types/types';

type AbilitiesPillProps = {
  AbilitiesList: Ability[];
};

export const AbilitiesPill = ({ AbilitiesList }: AbilitiesPillProps) => {
  return AbilitiesList.map((ability) => (
    <span
      className="inline-block w-[150px] mx-2 mb-2 px-4 py-1 bg-gray-300 rounded-2xl"
      key={ability.ability.name}
    >
      {ability.ability.name}
    </span>
  ));
};
