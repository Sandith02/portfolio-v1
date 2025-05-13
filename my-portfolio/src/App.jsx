import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SplashScreen from './components/splash/SplashScreen'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import TerminalPage from './pages/TerminalPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  const handleSplashComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/terminal" element={<TerminalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
