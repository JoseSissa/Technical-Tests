import { useState, useEffect } from 'react'
import './App.css'
import { Products } from './components/Products'
import type { Product } from './types/types'
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { useFilters } from './hooks/useFilters';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);

  const { getFilteredProducts, filters } = useFilters()

  const getMaxPriceAndAllCategories = ({ products }: { products: Product[] }) => {
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

  useEffect(() => {
    fetch('/src/mocks/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
        setProductsFiltered(data.products)
        const { allCategories, maxPrice } = getMaxPriceAndAllCategories({ products: data.products })
        setCategories(allCategories)
        setMaxPrice(maxPrice)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <main>
        <Header products={products} categories={categories} maxPrice={maxPrice} setProductsFiltered={setProductsFiltered} getFilteredProducts={getFilteredProducts} filters={filters} />
        <Products products={productsFiltered} />
        <Footer filters={filters} />
      </main>
    </>
  )
}

export default App
