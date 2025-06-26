import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../icons.js'
import { useCart } from '../../hooks/useCart.js'
import { CartItem } from './CartItem.js'


export function Cart() {
    const cartCheckboxId = useId()
    const { cart, addToCart, subtractFromCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            subtractFromCart={() => subtractFromCart(product)}
                            product={product}
                        />
                    ))}
                </ul>

                <button onClick={(e) => console.log(e)}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}