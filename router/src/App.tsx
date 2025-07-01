import { lazy, Suspense } from 'react'
import HomePage from './pages/Home'
const LazyAboutPage = lazy(() => import('./pages/About')) // <-- Lazy loading
const LazyDinamicPage = lazy(() => import('./pages/Dinamic')) // <-- Lazy loading
// import ContactPage from './pages/Contact'
const LazyContactPage = lazy(() => import('./pages/Contact')) // <-- Lazy loading
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
    component: LazyAboutPage,
  },
  {
    path: '/search/:query',
    component: LazyDinamicPage,
  },
  {
    path: '/:lang/about',
    component: LazyAboutPage,
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes}>
          <Route path="/info" component={LazyContactPage} />
          <Route path="/contact" component={LazyContactPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
