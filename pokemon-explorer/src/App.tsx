import { useState } from 'react'
import './App.css'
import { CardPokemon } from './components/Card-Pokemon'
import { usePokemonDetail } from './hooks/usePokemonDetail'
import type { PokemonDetail } from './types/types'


function App() {
  const [page, setPage] = useState<number>(1)
  const { pokemonByPage } = usePokemonDetail({ page })

  const handleModal = (pokemon: PokemonDetail) => {
    console.log(pokemon)
  }


  return (
    <>
      <h1>Pokemon Explorer</h1>
      <CardPokemon pokemonList={pokemonByPage} handleModal={handleModal} />
      <button onClick={() => setPage(page + 1)}>Load more Pokemons</button>
    </>
  )
}

export default App
