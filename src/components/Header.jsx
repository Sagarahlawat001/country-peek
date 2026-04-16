import { Link } from 'react-router-dom'

function Header() {
  return (
    // 1. header element, className="header"
    <header className="header">
      
      {/* Brand */}
      <Link to="/" className="header__brand">
        CountryPeek
      </Link>

      {/* Navigation */}
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>

    </header>
  )
}

export default Header