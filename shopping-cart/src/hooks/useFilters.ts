import { useContext } from 'react'
import { FiltersContext } from '../context/filter';
import type { Product } from '../types/types';

export function useFilters() {
    // const [filters, setFilter] = useState<Filters>({ price: 0, category: 'all' });

    const { filters, setFilters } = useContext(FiltersContext)



    const getFilteredProducts = ({ products, newCategory = filters.category, newPrice = filters.price }: { products: Product[], newCategory?: string, newPrice?: number }) => {
        setFilters({ price: newPrice, category: newCategory })
        const filteredProducts = products.filter((product) => {
            if (product.price >= newPrice && (product.category === newCategory || newCategory === 'all')) {
                return product
            }
        })
        return filteredProducts
    }

    return { getFilteredProducts, filters }
}