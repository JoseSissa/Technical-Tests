import './App.css'
import { useState, useEffect } from 'react'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { EVENT } from './config/const'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    // Listener for next navigation
    window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
    // Listener for back navigation
    window.addEventListener(EVENT.POPSTATE, onLocationChange)
    // Cleanup function to avoid memory leaks
    return () => {
      window.removeEventListener(EVENT.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENT.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
