import type { Dispatch, SetStateAction } from 'react';
import type { Filters, Product } from "../types/types"

export function Header(
    { products, categories, maxPrice, setProductsFiltered, getFilteredProducts, filters }: { products: Product[], categories: string[], maxPrice: number, setProductsFiltered: Dispatch<SetStateAction<Product[]>>, getFilteredProducts: any, filters: Filters }) {

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = event.target.value
        setProductsFiltered(getFilteredProducts({ products, newCategory }))
    }

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = parseInt(event.target.value)
        setProductsFiltered(getFilteredProducts({ products, newPrice }))
    }

    return (
        <header>
            <h1>Shopping Cart</h1>
            <div>
                <label htmlFor="category">Category:</label>
                <select name="category" id="category" onChange={handleCategoryChange}>
                    <option value="all" selected>All</option>
                    {
                        categories && (
                            categories.map((category) => (
                                <option value={category} key={category}>{category}</option>
                            ))
                        )
                    }
                </select>
            </div>
            <div>
                <label htmlFor="price">Precio a partir de:</label>
                <input type="range" name="price" id="price" min="0" max={maxPrice} value={filters.price} onChange={handlePriceChange} />
                <span>${filters.price}</span>
            </div>
        </header>
    )
}