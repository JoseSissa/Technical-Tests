import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
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
