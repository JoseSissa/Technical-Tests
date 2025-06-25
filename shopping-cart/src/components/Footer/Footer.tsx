import type { Filters } from '../../types/types'
import './Footer.css'

export function Footer({ filters }: { filters: Filters }) {

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