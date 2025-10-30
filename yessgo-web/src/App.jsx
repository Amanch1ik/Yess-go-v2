import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import PartnersPage from './pages/PartnersPage'
import QRPage from './pages/QRPage'
import NotificationsPage from './pages/NotificationsPage'
import MorePage from './pages/MorePage'
import LoginPage from './pages/LoginPage'
import BottomNav from './components/BottomNav'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const auth = localStorage.getItem('yessgo_auth')
    if (auth) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    localStorage.setItem('yessgo_auth', 'true')
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('yessgo_auth')
    setIsAuthenticated(false)
    setCurrentPage('home')
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'partners':
        return <PartnersPage />
      case 'qr':
        return <QRPage />
      case 'notifications':
        return <NotificationsPage />
      case 'more':
        return <MorePage onLogout={handleLogout} />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app">
      <div className="page-container">
        {renderPage()}
      </div>
      <BottomNav currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  )
}

export default App
