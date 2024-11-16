import { useState, useEffect } from 'react'

export function useCatFact() {
  const [fact, setFact] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const getRandomFact = () => {
    setLoading(true)
    fetch('https://catfact.ninja/fact')
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching data')
        return res.json()
      })
      .then((data) => setFact(data.fact))
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getRandomFact()
  }, [])

  return { fact, error, loading, getRandomFact }
}
