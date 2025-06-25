import { useState } from 'react'
import type { Product, Filters } from '../types/types';

export function useFilters() {
    const [filters, setFilter] = useState<Filters>({ price: 0, category: 'all' });

    const getFilteredProducts = ({ products, newCategory = filters.category, newPrice = filters.price }: { products: Product[], newCategory?: string, newPrice?: number }) => {
        setFilter({ price: newPrice, category: newCategory })
        const filteredProducts = products.filter((product) => {
            if (product.price >= newPrice && (product.category === newCategory || newCategory === 'all')) {
                return product
            }
        })
        return filteredProducts
    }

    return { getFilteredProducts, filters }
}