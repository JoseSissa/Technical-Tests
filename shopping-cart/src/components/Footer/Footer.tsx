import { useContext } from 'react'
import './Footer.css'
import { CartContext } from '../../context/CartContext.tsx'

export function Footer() {
    const { cart } = useContext(CartContext)

    return (
        <footer className='footer'>
            {
                JSON.stringify(cart)
            }
            {/* <h4>Prueba técnica de React ⚛️</h4>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}