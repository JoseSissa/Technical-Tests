import { useState, useEffect } from 'react'
import './App.css'
import { EVENT } from './config/const'

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the home page</p>
      <button onClick={() => navigate('/about')}>About</button>
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
      <button onClick={() => navigate('/')}>Home</button>
    </>
  )
}

function navigate(href: string) {
  // Change the URL
  window.history.pushState({}, '', href)
  // Creeate a new event
  const navigation = new Event(EVENT.PUSHSTATE)
  // Send the event
  window.dispatchEvent(navigation)
}

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
