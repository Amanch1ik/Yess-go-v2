import './QRPage.css'

const QRPage = () => {
  return (
    <div className="qr-page">
      <div className="page-header">
        <h1>QR Код</h1>
      </div>

      <div className="qr-container">
        <div className="qr-placeholder">
          <div className="qr-icon">📱</div>
          <h2>Сканировать QR-код</h2>
          <p>Отсканируйте QR-код у партнера для получения бонусов</p>
          <button className="scan-btn">Сканировать</button>
        </div>
      </div>
    </div>
  )
}

export default QRPage
