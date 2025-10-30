import './NotificationsPage.css'

const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      <div className="page-header">
        <h1>Уведомления</h1>
      </div>

      <div className="notifications-container">
        <div className="empty-state">
          <div className="empty-icon">🔔</div>
          <h2>Нет новых уведомлений</h2>
          <p>Здесь будут отображаться важные уведомления и новости</p>
        </div>
      </div>
    </div>
  )
}

export default NotificationsPage
