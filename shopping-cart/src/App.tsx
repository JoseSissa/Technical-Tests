import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { useProducts } from './hooks/useProducts';
import { CartProvider } from './context/CartContext';

function App() {
  const { products, productsFiltered, setProductsFiltered, maxPrice, allCategories } = useProducts()

  return (
    <CartProvider>
      <main>
        <Header products={products} allCategories={allCategories} maxPrice={maxPrice} setProductsFiltered={setProductsFiltered} />
        <Cart />
        <Products productsFiltered={productsFiltered} />
        <Footer />
      </main>
    </CartProvider>
  )
}

export default App
