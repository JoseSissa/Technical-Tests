import { useState, useEffect, createContext } from 'react';
import type {
  PokemonContextType,
  PokemonDetail,
  PokemonByType,
} from '../types/types';
import {
  BASE_API_URL,
  BASE_API_URL_TYPES,
  POKEMONS_PER_PAGE,
  LIMIT_POKEMONS,
} from '../config';

export const PokemonContext = createContext<PokemonContextType>({
  page: 1,
  setPage: () => {},
  searchPokemon: '',
  pokemonsByType: 'all',
  setSearchPokemon: () => {},
  getOnePokemon: () => {},
  showList: () => {},
  setIsModalOpen: () => {},
  setPokemonDetail: () => {},
  getPokemonsByType: () => {},
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
  const [pokemonsByType, setPokemonsByType] = useState<string>('all');
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
    null
  );

  const getPokemonsByType = async (type: string) => {
    // If the type is the same as the current type, do nothing
    if (pokemonsByType === type) return;
    // If the type is 'all', reset the page and get the list of all pokemons
    if (type === 'all') {
      setPage(1);
      setListPokemons([]);
      getPokemonList();
      setPokemonsByType('all');
      return;
    }
    // If the type is different, get the list of pokemons by type
    try {
      const response = await fetch(`${BASE_API_URL_TYPES}/${type}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const pokemonsURLList = data.pokemon
        .map((pokemon: PokemonByType) => {
          const id = Number(pokemon.pokemon.url.split('/')[6]);
          return id;
        })
        .filter((id: number) => id <= LIMIT_POKEMONS);

      const pokemonPromises = [];
      for (let i = 0; i < pokemonsURLList.length; i++) {
        pokemonPromises.push(getPokemonData(pokemonsURLList[i]));
      }
      const pokemonData = await Promise.all(pokemonPromises);
      setPokemonsByType(type);
      setListPokemons(pokemonData);
      return data;
    } catch (error) {
      throw new Error(`Error fetching Pokémon by type ${type}: ${error}`);
    }
  };

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
        pokemonsByType,
        setSearchPokemon,
        getOnePokemon,
        showList,
        setIsModalOpen,
        setPokemonDetail,
        getPokemonsByType,
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
