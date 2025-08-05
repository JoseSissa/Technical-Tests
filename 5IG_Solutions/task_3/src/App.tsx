import './App.css';
import Header from './components/Header';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer';
import { PokemonProvider } from './context/PokemonContext';
import { ListPokemons } from './components/ListPokemons';
import { LoadMorePokemons } from './components/LoadMorePokemons';

function App() {
  return (
    <PokemonProvider>
      <Modal />
      <Header />
      <ListPokemons />
      <LoadMorePokemons />
      <Footer />
    </PokemonProvider>
  );
}

export default App;
