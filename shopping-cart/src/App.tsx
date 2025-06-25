import { useState, useEffect } from 'react'
import './App.css'
import { Products } from './components/Products'
import type { Product } from './types/types'

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);

  const [priceSelected, setPriceSelected] = useState<number>(0);
  const [categorySelected, setCategorySelected] = useState<string>('all');

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

  const getFilteredProducts = ({ products, categorySelected, priceSelected }: { products: Product[], categorySelected: string, priceSelected: number }) => {
    const filteredProducts = products.filter((product) => {
      if (product.price >= priceSelected && (product.category === categorySelected || categorySelected === 'all')) {
        return product
      }
    })

    return filteredProducts
  }

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
    <>
      <main>
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
        <Products products={productsFiltered} />
      </main>
    </>
  )
}

export default App
