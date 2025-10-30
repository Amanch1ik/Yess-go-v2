import { useState } from 'react'
import './HomePage.css'

const HomePage = () => {
  const [balance] = useState(1250.50)
  const [showStory, setShowStory] = useState(false)
  const [currentStory, setCurrentStory] = useState(null)

  const stories = [
    { id: 1, title: 'Бонусы', icon: '🎁', color: '#FF6B6B' },
    { id: 2, title: 'Йесскоины', icon: '💰', color: '#4ECDC4' },
    { id: 3, title: 'Мы', icon: '👥', color: '#45B7D1' },
    { id: 4, title: 'Акции', icon: '🔥', color: '#FFA07A' },
    { id: 5, title: 'Новости', icon: '📰', color: '#98D8C8' }
  ]

  const partners = [
    { id: 1, name: 'Промзона', logo: '🏪' },
    { id: 2, name: 'Faiza', logo: '☕' },
    { id: 3, name: 'Navat', logo: '🍰' },
    { id: 4, name: 'Flask', logo: '🥤' },
    { id: 5, name: 'Sierra', logo: '🍔' },
    { id: 6, name: 'Teplo', logo: '🔥' }
  ]

  const openStory = (story) => {
    setCurrentStory(story)
    setShowStory(true)
  }

  return (
    <div className="home-page">
      <div className="header-section">
        <div className="profile-section">
          <div className="avatar">👤</div>
          <div className="profile-info">
            <h2>Demo User</h2>
            <p>demo@yessgo.com</p>
          </div>
        </div>

        <div className="balance-card">
          <div className="balance-header">
            <span className="balance-label">Ваш Баланс</span>
            <button className="history-btn">История</button>
          </div>
          <div className="balance-amount">
            <span className="amount">{balance.toFixed(2)}</span>
            <span className="currency-badge">YessCoin</span>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="section">
          <h3 className="section-title">Быстрый доступ</h3>
          <div className="stories-container scrollable-horizontal">
            {stories.map(story => (
              <div key={story.id} className="story-item" onClick={() => openStory(story)}>
                <div className="story-circle" style={{ background: story.color }}>
                  <span className="story-icon">{story.icon}</span>
                </div>
                <p className="story-title">{story.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Наши партнёры</h3>
          <div className="partners-grid">
            {partners.map(partner => (
              <div key={partner.id} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <p className="partner-name">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showStory && currentStory && (
        <div className="story-overlay" onClick={() => setShowStory(false)}>
          <div className="story-content">
            <div className="story-header">
              <div className="story-info">
                <div className="story-avatar" style={{ background: currentStory.color }}>
                  {currentStory.icon}
                </div>
                <h3>{currentStory.title}</h3>
              </div>
              <button className="close-btn" onClick={() => setShowStory(false)}>✕</button>
            </div>
            <div className="story-body">
              <div className="story-image-placeholder">
                <span style={{ fontSize: '60px' }}>{currentStory.icon}</span>
                <p>История: {currentStory.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
