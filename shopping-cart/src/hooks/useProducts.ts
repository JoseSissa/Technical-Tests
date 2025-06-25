import { useState, useEffect } from 'react'
import type { Product } from '../types/types'
import { getMaxPriceAndAllCategories } from '../helper/getMaxPriceAndAllCategories'

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [allCategories, setAllCategories] = useState<string[]>([]);

    useEffect(() => {
        fetch('/src/mocks/products.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products)
                setProductsFiltered(data.products)
                const { allCategories, maxPrice } = getMaxPriceAndAllCategories({ products: data.products })
                setAllCategories(allCategories)
                setMaxPrice(maxPrice)
            })
            .catch((error) => console.error(error))
    }, [])

    return { products, productsFiltered, setProductsFiltered, maxPrice, allCategories }
}