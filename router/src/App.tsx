import './App.css'

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the home page</p>
      <a href="/about">About</a>
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
      <a href="/">Home</a>
    </>
  )
}

function App() {

  return (
    <main>
      <HomePage />
      <AboutPage />
    </main>
  )
}

export default App
