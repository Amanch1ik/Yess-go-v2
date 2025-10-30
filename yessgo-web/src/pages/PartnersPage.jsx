import './PartnersPage.css'

const PartnersPage = () => {
  const partners = [
    { id: 1, name: 'Промзона', category: 'Магазин', cashback: '5%', logo: '🏪' },
    { id: 2, name: 'Faiza', category: 'Кафе', cashback: '10%', logo: '☕' },
    { id: 3, name: 'Navat', category: 'Ресторан', cashback: '7%', logo: '🍰' },
    { id: 4, name: 'Flask', category: 'Бар', cashback: '8%', logo: '🥤' },
    { id: 5, name: 'Sierra', category: 'Кафе', cashback: '10%', logo: '🍔' },
    { id: 6, name: 'Teplo', category: 'Ресторан', cashback: '12%', logo: '🔥' }
  ]

  return (
    <div className="partners-page">
      <div className="page-header">
        <h1>Партнёры</h1>
        <button className="search-btn">🔍</button>
      </div>

      <div className="partners-list">
        {partners.map(partner => (
          <div key={partner.id} className="partner-item">
            <div className="partner-icon">{partner.logo}</div>
            <div className="partner-info">
              <h3>{partner.name}</h3>
              <p className="category">{partner.category}</p>
            </div>
            <div className="cashback-badge">{partner.cashback}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnersPage
