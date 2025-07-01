import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import DinamicPage from './pages/Dinamic'
import ContactPage from './pages/Contact'
import { Router } from './components/Router'
import { Route } from './components/Route'
import type { RouteType } from './types/types'

const routes: RouteType[] = [
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
      <Router routes={routes}>
        <Route path="/info" component={ContactPage} />
        <Route path="/contact" component={ContactPage} />
      </Router>
    </main>
  )
}

export default App
