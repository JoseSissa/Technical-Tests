import type { Product } from "../types/types";

export const getMaxPriceAndAllCategories = ({ products }: { products: Product[] }) => {
    let allCategories: string[] = []
    let maxPrice = 0;
    products.forEach((product: Product) => {
        if (!allCategories.includes(product.category)) {
            allCategories.push(product.category)
        }
        if (product.price > maxPrice) {
            maxPrice = product.price
        }
    });
    return { allCategories, maxPrice }
};