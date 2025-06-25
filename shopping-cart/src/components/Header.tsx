import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react';
import type { Product } from "../types/types"

export function Header(
    { products, categories, maxPrice, setProductsFiltered }: { products: Product[], categories: string[], maxPrice: number, setProductsFiltered: Dispatch<SetStateAction<Product[]>> }) {
    const [priceSelected, setPriceSelected] = useState<number>(0);
    const [categorySelected, setCategorySelected] = useState<string>('all');

    const getFilteredProducts = ({ products, categorySelected, priceSelected }: { products: Product[], categorySelected: string, priceSelected: number }) => {
        const filteredProducts = products.filter((product) => {
            if (product.price >= priceSelected && (product.category === categorySelected || categorySelected === 'all')) {
                return product
            }
        })

        return filteredProducts
    }

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = event.target.value
        setCategorySelected(newCategory)
        setProductsFiltered(getFilteredProducts({ products, categorySelected: newCategory, priceSelected }))
    }

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = parseInt(event.target.value)
        setPriceSelected(newPrice)
        setProductsFiltered(getFilteredProducts({ products, categorySelected, priceSelected: newPrice }))
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
                <input type="range" name="price" id="price" min="0" max={maxPrice} value={priceSelected} onChange={handlePriceChange} />
                <span>${priceSelected}</span>
            </div>
        </header>
    )
}