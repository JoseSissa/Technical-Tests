import type { Product } from '../types/types'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
import { useCart } from '../hooks/useCart'

export function Products({ productsFiltered }: { productsFiltered: Product[] }) {

    const { cart, addToCart, removeFromCart } = useCart()

    const checkProductInCart = (product: Product) => {
        return cart.some((cartProduct) => cartProduct.id === product.id)
    }

    return (
        productsFiltered
            ? (
                <ul className='products'>
                    {productsFiltered.map((product) => {
                        const isProductAdded = checkProductInCart(product)
                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <h3>{product.title}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>Category: {product.category}</p>
                                </div>
                                <div>
                                    <button
                                        style={{ backgroundColor: isProductAdded ? '#f00' : 'transparent' }}
                                        onClick={
                                            isProductAdded
                                                ? () => removeFromCart(product)
                                                : () => addToCart(product)}>
                                        {
                                            isProductAdded
                                                ? <RemoveFromCartIcon />
                                                : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )
            : <p>No products found</p>
    )
}