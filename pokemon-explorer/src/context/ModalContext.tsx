import { createContext, useState, useRef } from "react";
import type { PokemonDetail } from "../types/types";
import { Modal } from "../components/Modal";

type ModalContextType = {
    infoModal: PokemonDetail | null;
    openModal: (pokemon: PokemonDetail) => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const modalRef = useRef<HTMLDialogElement>(null)
    const [infoModal, setInfoModal] = useState<PokemonDetail | null>(null)

    const closeModal = () => {
        modalRef.current?.close()
        setInfoModal(null)
    }

    const openModal = (pokemon: PokemonDetail) => {
        setInfoModal(pokemon)
        modalRef.current?.showModal()
    }

    return (
        <ModalContext.Provider value={{ infoModal, openModal }}>
            {children}
            <Modal reference={modalRef} closeModal={closeModal} infoModal={infoModal} />
        </ModalContext.Provider>
    )
}