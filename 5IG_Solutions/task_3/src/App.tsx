import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PokemonCards from './components/PokemonCards';
import { usePokemons } from './hooks/usePokemons';
import Modal from './components/Modal';
import type { PokemonDetail } from './types/types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoPokemonDetail, setInfoPokemonDetail] =
    useState<PokemonDetail | null>(null);
  const {
    pokemonDataList,
    setPage,
    setSearch,
    search,
    pokemonData,
    showList,
    fetchUniqPokemon,
  } = usePokemons();

  console.log({ pokemonData });

  return (
    <>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          infoPokemonDetail={infoPokemonDetail}
        />
      )}
      <Header
        setSearch={setSearch}
        search={search}
        fetchUniqPokemon={fetchUniqPokemon}
      />

      {pokemonData ? (
        <PokemonCards
          pokemonDataList={[pokemonData]}
          setIsModalOpen={setIsModalOpen}
          showList={showList}
          setInfoPokemonDetail={setInfoPokemonDetail}
        />
      ) : (
        <PokemonCards
          pokemonDataList={pokemonDataList}
          setIsModalOpen={setIsModalOpen}
          showList={showList}
          setInfoPokemonDetail={setInfoPokemonDetail}
        />
      )}
      {pokemonData === null && (
        <button
          className="block mx-auto mb-8 border shadow-lg px-2 py-1 font-[500] rounded-sm bg-white cursor-pointer"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load more Pokemons
        </button>
      )}
    </>
  );
}

export default App;
