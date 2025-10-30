import { useState } from 'react'
import './LoginPage.css'

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      onLogin()
    }
  }

  const handleDemoLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="logo-circle">🍃</div>
          <h1 className="app-title">YessGo</h1>
          <p className="app-subtitle">Demo Version</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>

          <button type="submit" className="btn-primary">
            Войти
          </button>

          <button type="button" className="btn-demo" onClick={handleDemoLogin}>
            Войти как демо
          </button>
        </form>

        <div className="install-prompt">
          <p>💡 Установите приложение на домашний экран для лучшего опыта</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
