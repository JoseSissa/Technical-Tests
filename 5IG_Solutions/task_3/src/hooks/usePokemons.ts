import { useState, useEffect } from 'react';
import type { PokemonDetail } from '../types/types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const usePokemons = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [pokemonData, setPokemonData] = useState<PokemonDetail | null>(null);
  const [pokemonDataList, setPokemonDataList] = useState<PokemonDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const showList = () => {
    setPokemonData(null);
    setSearch('');
  };

  const fetchUniqPokemon = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${search}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (data.id <= 151) {
        setPokemonData(data);
      } else {
        setError('Pokemon not found, please enter a valid pokemon name');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const fetchPokemon = async (id: number) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching Pokémon ${id}: ${error}`);
    }
  };

  // Función para obtener todos los Pokémon del 1 al 10
  const fetchAllPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      // Crear un array de promesas para los IDs del 1 al 10
      const pokemonPromises = [];
      for (let i = (page - 1) * 10 + 1; i <= page * 10; i++) {
        pokemonPromises.push(fetchPokemon(i));
      }

      // Ejecutar todas las promesas en paralelo
      const pokemonData = await Promise.all(pokemonPromises);
      setPokemonDataList((prev) => [...prev, ...pokemonData]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    fetchAllPokemon();
  }, [page]);

  return {
    setPage,
    search,
    setSearch,
    fetchUniqPokemon,
    showList,
    pokemonDataList,
    pokemonData,
    loading,
    error,
  };
};
