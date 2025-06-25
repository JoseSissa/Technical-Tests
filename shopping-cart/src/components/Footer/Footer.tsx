import { useContext } from 'react'
import { FiltersContext } from '../../context/Filter.tsx'
import './Footer.css'

export function Footer() {
    const { filters } = useContext(FiltersContext)

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters)
            }
            <h4>Prueba técnica de React ⚛️</h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}