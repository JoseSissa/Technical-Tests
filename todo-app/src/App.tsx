import './App.css'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <Header />
      <h1>todo mvc</h1>
      <Todos />
      <Footer />
    </>
  )
}

export default App
