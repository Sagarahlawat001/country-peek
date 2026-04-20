import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="home">
        <div className="home__status">
          <h2>No Favourites Yet</h2>
          <p>You haven't saved any countries to your favourites list.</p>
          <Link to="/" className="back-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>
            Go Home to explore
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="filter-bar">
        <h2>Your Favourites</h2>
      </div>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Favourites
