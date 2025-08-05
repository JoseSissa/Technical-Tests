import { useState, useEffect, createContext } from 'react';
import type { PokemonContextType, PokemonDetail } from '../types/types';
import { BASE_API_URL, POKEMONS_PER_PAGE, LIMIT_POKEMONS } from '../config';

export const PokemonContext = createContext<PokemonContextType>({
  page: 1,
  setPage: () => {},
  searchPokemon: '',
  setSearchPokemon: () => {},
  getOnePokemon: () => {},
  showList: () => {},
  setIsModalOpen: () => {},
  setPokemonDetail: () => {},
  isModalOpen: false,
  pokemonDetail: null,
  listPokemons: [],
  onePokemon: null,
  loading: false,
  error: null,
});

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [searchPokemon, setSearchPokemon] = useState<string>('');
  const [onePokemon, setOnePokemon] = useState<PokemonDetail | null>(null);
  const [listPokemons, setListPokemons] = useState<PokemonDetail[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
    null
  );

  const getOnePokemon = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/${searchPokemon}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (data.id <= LIMIT_POKEMONS) {
        setOnePokemon(data);
      } else {
        setError('Pokemon not found, please enter a valid pokemon name');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getPokemonData = async (id: number) => {
    try {
      const response = await fetch(`${BASE_API_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching Pokémon ${id}: ${error}`);
    }
  };

  const getPokemonList = async () => {
    try {
      setLoading(true);
      setError(null);

      const pokemonPromises = [];
      for (
        let i = (page - 1) * POKEMONS_PER_PAGE + 1;
        i <= page * POKEMONS_PER_PAGE && i <= LIMIT_POKEMONS;
        i++
      ) {
        pokemonPromises.push(getPokemonData(i));
      }
      // Execute all promises in parallel
      const pokemonData = await Promise.all(pokemonPromises);
      setListPokemons((prev) => [...prev, ...pokemonData]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const showList = () => {
    setOnePokemon(null);
    setSearchPokemon('');
  };

  useEffect(() => {
    getPokemonList();
  }, [page]);

  return (
    <PokemonContext.Provider
      value={{
        page,
        setPage,
        searchPokemon,
        setSearchPokemon,
        getOnePokemon,
        showList,
        setIsModalOpen,
        setPokemonDetail,
        isModalOpen,
        pokemonDetail,
        listPokemons,
        onePokemon,
        loading,
        error,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
