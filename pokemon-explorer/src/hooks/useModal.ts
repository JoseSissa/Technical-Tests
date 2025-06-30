import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

export function useModal() {
    const modalContext = useContext(ModalContext)

    if (modalContext === null || modalContext === undefined) {
        throw new Error("ModalContext is not defined")
    }

    return modalContext
}