import { usePokemon } from '../../hooks/usePokemon';
import { Close } from '../icons/Close';
import { AbilitiesPill } from './AbilitiesPill';
import { AttributesPill } from './AttributesPill';
import { Stats } from './Stats';
import { TypesPill } from './TypesPill';

export default function Modal() {
  const { isModalOpen, pokemonDetail, setIsModalOpen } = usePokemon();

  if (isModalOpen) {
    return (
      <>
        {pokemonDetail && (
          <section className="fixed inset-0 z-20 flex items-center justify-center p-5 bg-[#ececec] overflow-y-auto">
            <button
              className="absolute top-7 right-7 p-2 text-black font-[500] z-30 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <Close />
            </button>

            <div className="w-full max-w-[500px] max-h-full bg-white rounded-xl shadow-lg overflow-y-auto mx-auto">
              <div className="flex flex-col items-center p-6">
                {/* image */}
                <div className="flex justify-center items-center aspect-square h-[250px] mb-4">
                  <img
                    className="drop-shadow-[0px_6px_4px_black] max-w-full max-h-full aspect-square"
                    src={pokemonDetail.sprites.other['home'].front_default}
                    alt={pokemonDetail.name}
                  />
                </div>
                {/* name */}
                <h2 className="mb-4 text-2xl font-[700] capitalize">
                  {pokemonDetail.name}
                </h2>
                {/* types */}
                <div className="mb-5">
                  {pokemonDetail.types.map((type) => (
                    <TypesPill typeName={type.type.name} />
                  ))}
                </div>
                {/* height and weight */}
                <div className="flex justify-center items-center text-center mb-6">
                  <div className="font-[500]">
                    Height
                    <AttributesPill>
                      {pokemonDetail.height / 10} m
                    </AttributesPill>
                  </div>
                  <div className="font-[500]">
                    Weight
                    <AttributesPill>
                      {pokemonDetail.weight / 10} kg
                    </AttributesPill>
                  </div>
                </div>
                {/* abilities */}
                <div className="text-center mb-5 font-[500]">
                  <h2>Abilities</h2>
                  <div className="flex justify-center items-center capitalize flex-wrap">
                    <AbilitiesPill AbilitiesList={pokemonDetail.abilities} />
                  </div>
                </div>
                {/* stats */}
                <div className="w-full text-center font-[500]">
                  <h2>Stats</h2>
                  <div className="mt-3">
                    <Stats stats={pokemonDetail.stats} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
