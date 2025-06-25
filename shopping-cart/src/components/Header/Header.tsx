import type { Dispatch, SetStateAction } from 'react';
import type { Product } from "../../types/types"
import { Filters } from './Filters';

export function Header(
    { products, allCategories, maxPrice, setProductsFiltered }:
        { products: Product[], allCategories: string[], maxPrice: number, setProductsFiltered: Dispatch<SetStateAction<Product[]>> }) {

    return (
        <header>
            <h1>Shopping Cart</h1>
            <Filters products={products} allCategories={allCategories} maxPrice={maxPrice} setProductsFiltered={setProductsFiltered} />
        </header>
    )
}