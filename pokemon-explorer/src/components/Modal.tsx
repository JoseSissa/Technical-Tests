import { useState, useEffect } from "react";
import type { PokemonDetail } from "../types/types";

export function Modal({ showModal, setShowModal, pokemonDetail }: { showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, pokemonDetail: PokemonDetail }) {
    const [pd, setPd] = useState<PokemonDetail>(pokemonDetail)
    useEffect(() => {
        setPd(pokemonDetail)
    }, [pokemonDetail])


    return pd && (
        <dialog id="modal-pokemon-details" open={showModal} onClose={() => setShowModal(false)}>
            hola
            {/* <p>ID: {pokemonDetail.id}</p>
                <p>Name: {pokemonDetail.name}</p>
                <p>Image</p>
                <img src={pokemonDetail.sprites.other['official-artwork'].front_default} alt="" />
                <p>Height: {pokemonDetail.height}</p>
                <p>Weight: {pokemonDetail.weight}</p> */}
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
    // return (
    //     <dialog id="modal-pokemon-details" open={showModal} onClose={() => setShowModal(false)}>
    //         hola
    //         {/* <p>ID: {pokemonDetail.id}</p>
    //             <p>Name: {pokemonDetail.name}</p>
    //             <p>Image</p>
    //             <img src={pokemonDetail.sprites.other['official-artwork'].front_default} alt="" />
    //             <p>Height: {pokemonDetail.height}</p>
    //             <p>Weight: {pokemonDetail.weight}</p> */}
    //         <form method="dialog">
    //             <button>Close</button>
    //         </form>
    //     </dialog>
    // )
}