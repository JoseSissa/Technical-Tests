import { useState } from 'react'
import './App.css'
import { CardPokemon } from './components/Card-Pokemon'
import { usePokemonDetail } from './hooks/usePokemonDetail'
import { ModalProvider } from './context/ModalContext'

function App() {
  const [page, setPage] = useState<number>(1)
  const { pokemonByPage } = usePokemonDetail({ page })

  return (
    <ModalProvider>
      <h1>Pokemon Explorer</h1>
      <CardPokemon pokemonList={pokemonByPage} />
      <button onClick={() => setPage(page + 1)}>Load more Pokemons</button>
    </ModalProvider>
  )
}

export default App
