import { useContext } from 'react'
import { FiltersContext } from "../../context/FirterContext"
import { useFilters } from "../../hooks/useFilters"
import type { Product } from "../../types/types"

export function Filters({ products, allCategories, maxPrice, setProductsFiltered }: { products: Product[], allCategories: string[], maxPrice: number, setProductsFiltered: any }) {
    const { getFilteredProducts } = useFilters()
    const { filters } = useContext(FiltersContext)

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = event.target.value
        setProductsFiltered(getFilteredProducts({ products, newCategory }))
    }

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = parseInt(event.target.value)
        setProductsFiltered(getFilteredProducts({ products, newPrice }))
    }

    return (
        <section>
            <div>
                <label htmlFor="category">Category:</label>
                <select name="category" id="category" onChange={handleCategoryChange}>
                    <option value="all" defaultValue={"all"}>All</option>
                    {
                        allCategories && (
                            allCategories.map((category) => (
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
        </section>
    )
}