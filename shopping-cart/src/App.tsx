import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useProducts } from './hooks/useProducts';

function App() {
  const { products, productsFiltered, setProductsFiltered, maxPrice, allCategories } = useProducts()

  return (
    <>
      <main>
        <Header products={products} allCategories={allCategories} maxPrice={maxPrice} setProductsFiltered={setProductsFiltered} />
        <Products productsFiltered={productsFiltered} />
        <Footer />
      </main>
    </>
  )
}

export default App
