import { useState, useRef } from 'react'
import './App.css'
import { CardPokemon } from './components/Card-Pokemon'
import { usePokemonDetail } from './hooks/usePokemonDetail'
import type { PokemonDetail } from './types/types'




function App() {
  const [page, setPage] = useState<number>(1)
  const { pokemonByPage } = usePokemonDetail({ page })
  // ------------------------------
  const modalRef = useRef<HTMLDialogElement>(null)
  const [infoModal, setInfoModal] = useState<PokemonDetail | null>(null)

  const handleModal = (pokemon: PokemonDetail) => {
    setInfoModal(pokemon)
    modalRef.current?.showModal()
  }

  const handleModalClose = () => {
    modalRef.current?.close()
    setInfoModal(null)
  }


  return (
    <>
      <dialog ref={modalRef} id="modal-pokemon-details" className="modal-pokemon-details" onClose={handleModalClose} closedby="any">
        hola
        <p>ID: {infoModal?.id}</p>
        <p>Name: {infoModal?.name}</p>
        <p>Image</p>
        <img src={infoModal?.sprites.other['official-artwork'].front_default} alt="" />
        <p>Height: {infoModal?.height}</p>
        <p>Weight: {infoModal?.weight}</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
      <h1>Pokemon Explorer</h1>
      <CardPokemon pokemonList={pokemonByPage} handleModal={handleModal} />
      <button onClick={() => setPage(page + 1)}>Load more Pokemons</button>
    </>
  )
}

export default App
