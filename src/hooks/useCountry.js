import { useState, useEffect } from 'react'

function useCountry(code) {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!code) {
      setCountry(null)
      setLoading(false)
      setError(null)
      return
    }

    const controller = new AbortController()

    const fetchCountry = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`,
          { signal: controller.signal }
        )

        if (!res.ok) {
          throw new Error('Country not found.')
        }

        const data = await res.json()
        setCountry(data[0] ?? null)
      } catch (err) {
        if (err.name === 'AbortError') return
        setCountry(null)
        setError('Country not found.')
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()

    return () => {
      controller.abort()
    }
  }, [code])

  return { country, loading, error }
}

export default useCountry
