import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import DinamicPage from './pages/Dinamic'
import { Router } from './components/Router'
import type { Route } from './types/types'

const routes: Route[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/search/:query',
    component: DinamicPage,
  }
]

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
