import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      
      {/* Brand */}
      <Link to="/" className="header__brand" aria-label="CountryPeek Home">
        CountryPeek
      </Link>

      {/* Navigation */}
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
        
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </nav>

    </header>
  )
}

export default Header