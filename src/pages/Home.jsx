import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'

function Home() {
  // query state
  const [query, setQuery] = useState('')

  // additional states
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query.trim()) {
      setCountries([])
      setError(null)
      return
    }

    const controller = new AbortController()
    const queryValue = query.trim()

    const timer = setTimeout(() => {
      const fetchCountries = async () => {
        try {
          setLoading(true)
          setError(null)

          const res = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(queryValue)}`,
            { signal: controller.signal }
          )

          if (!res.ok) throw new Error('No countries found.')

          const data = await res.json()
          setCountries(data)
          setError(null)
        } catch (err) {
          if (err.name === 'AbortError') return
          setCountries([])
          setError('No countries found.')
        } finally {
          setLoading(false)
        }
      }

      fetchCountries()
    }, 400)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  return (
    <div className="home">
      <SearchBar query={query} onQueryChange={setQuery} />

      {loading && <p className="home__status">Loading...</p>}

      {error && (
        <p className="home__status home__status--error">{error}</p>
      )}

      {!loading && !error && countries.length > 0 && (
        <div className="cards-grid">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}

      {!loading && !error && countries.length === 0 && !query && (
        <p className="home__status">
          Start searching to explore countries.
        </p>
      )}
    </div>
  )
}

export default Home