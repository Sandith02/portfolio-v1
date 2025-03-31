import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SplashScreen from './components/splash/SplashScreen'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
