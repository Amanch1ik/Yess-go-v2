import './BottomNav.css'

const BottomNav = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Главная', icon: '🏠' },
    { id: 'partners', label: 'Партнеры', icon: '🏢' },
    { id: 'qr', label: 'QR', icon: '📱' },
    { id: 'notifications', label: 'Уведомления', icon: '🔔' },
    { id: 'more', label: 'Еще', icon: '⋯' }
  ]

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => onPageChange(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
