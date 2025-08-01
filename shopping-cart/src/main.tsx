import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FiltersProvider } from './context/FirterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
