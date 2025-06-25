import type { Product } from '../types/types'
import { AddToCartIcon } from './icons'

export function Products({ productsFiltered }: { productsFiltered: Product[] }) {
    return (
        productsFiltered
            ? (
                <ul className='products'>
                    {productsFiltered.map((product) => (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <h3>{product.title}</h3>
                                <p>Price: ${product.price}</p>
                                <p>Category: {product.category}</p>
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon />
                                </button>
                            </div>
                            {/* <p>{product.description}</p>
                            <p>Discount: {product.discountPercentage}%</p>
                            <p>Rating: {product.rating}</p>
                            <p>Stock: {product.stock}</p>
                            <p>Brand: {product.brand}</p> */}
                        </li>
                    ))}
                </ul>
            )
            : <p>No products found</p>
    )
}