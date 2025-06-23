import { useEffect, useRef, useState } from 'react'

export function useControlInput(search: string) {
    const [error, setError] = useState('')
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
        if (search === '') {
            setError('La búsqueda no puede estar vacía')
            return
        }
        if (search.length < 3) {
            setError('La búsqueda debe tener al menos 3 caracteres')
            return
        }
        setError('')
    }, [search])

    return { error }
}