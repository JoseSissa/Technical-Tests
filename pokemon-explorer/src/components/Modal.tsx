import type { PokemonDetail } from "../types/types"

type ModalProps = {
    reference: React.RefObject<HTMLDialogElement | null>;
    closeModal: () => void;
    infoModal: PokemonDetail | null;
};

export function Modal({ reference, closeModal, infoModal }: ModalProps) {
    return (
        <dialog ref={reference} className="modal-pokemon-details" onClose={closeModal} closedby="any">
            <p>ID: {infoModal?.id}</p>
            <p>Name: {infoModal?.name}</p>
            <p>Image</p>
            <img width={300} height={300} src={infoModal?.sprites?.other['official-artwork']?.front_default} alt={`Image of ${infoModal?.name}`} />
            <ul>
                {infoModal?.types.map(elem => {
                    return (
                        <li key={elem.slot}>
                            {elem.type.name}
                        </li>
                    )
                })}
            </ul>
            <p>Height: {infoModal?.height}</p>
            <p>Weight: {infoModal?.weight}</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}