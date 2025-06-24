import { useState, useEffect } from 'react'
import './App.css'
import type { Product } from './types/types'
import { Products } from './components/products'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/src/mocks/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <main>
        <h1>Shopping Cart</h1>
        <Products products={products} />
      </main>
    </>
  )
}

export default App
