import { useState } from 'react'
import './App.css'
import { CardPokemon } from './components/Card-Pokemon'
import { usePokemonDetail } from './hooks/usePokemonDetail'
import { ModalProvider } from './context/ModalContext'
import { TablePokemon } from './components/TablePokemon'

function App() {
  const [page, setPage] = useState<number>(1)
  const { pokemonByPage } = usePokemonDetail({ page })
  // View elements in grid or table
  const [toggleView, setToggleView] = useState<boolean>(false)

  return (
    <ModalProvider>
      <h1>Pokemon Explorer</h1>
      <button onClick={() => setToggleView(!toggleView)}>Toggle view</button>
      {
        toggleView
          ? (<TablePokemon pokemonList={pokemonByPage} />)
          : (<CardPokemon pokemonList={pokemonByPage} />)
      }
      <button onClick={() => setPage(page + 1)}>Load more Pokemons</button>
    </ModalProvider>
  )
}

export default App
