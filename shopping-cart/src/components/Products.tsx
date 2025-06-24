import type { Product } from '../types/types'
import { AddToCartIcon } from './icons'

export function Products({ products }: { products: Product[] }) {
    return (
        products
            ? (
                <ul className='products'>
                    {products.map((product) => (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <h3>{product.title}</h3>
                                <p>Price: ${product.price}</p>
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
                            <p>Brand: {product.brand}</p>
                            <p>Category: {product.category}</p> */}
                        </li>
                    ))}
                </ul>
            )
            : <p>No products found</p>
    )
}