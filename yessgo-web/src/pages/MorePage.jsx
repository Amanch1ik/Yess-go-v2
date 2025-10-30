import './MorePage.css'

const MorePage = ({ onLogout }) => {
  const menuItems = [
    { id: 1, label: 'Мой профиль', icon: '👤' },
    { id: 2, label: 'История транзакций', icon: '📊' },
    { id: 3, label: 'Настройки', icon: '⚙️' },
    { id: 4, label: 'Помощь', icon: '❓' },
    { id: 5, label: 'О приложении', icon: 'ℹ️' }
  ]

  return (
    <div className="more-page">
      <div className="page-header">
        <h1>Еще</h1>
      </div>

      <div className="menu-list">
        {menuItems.map(item => (
          <button key={item.id} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
            <span className="menu-arrow">›</span>
          </button>
        ))}

        <button className="menu-item logout" onClick={onLogout}>
          <span className="menu-icon">🚪</span>
          <span className="menu-label">Выйти</span>
        </button>
      </div>
    </div>
  )
}

export default MorePage
