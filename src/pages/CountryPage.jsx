import { useParams, Link } from 'react-router-dom'

function CountryPage() {
  const { code } = useParams()

  return (
    <div className="country-page">
      <h2>Country details</h2>
      <p>You selected <strong>{code}</strong>. Detail page coming soon.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default CountryPage
