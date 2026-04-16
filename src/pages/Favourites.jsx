import { Link } from 'react-router-dom'

function Favourites() {
  return (
    <div className="favourites">
      <h2>Favourites</h2>
      <p>This page will show favourites in a future part.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Favourites
