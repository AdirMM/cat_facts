import { useEffect, useState } from 'react'

export function useCatImage(fact) {
  const [image, setImage] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=white`
    )
      .then((data) => {
        setImage(data.url)
        if (fact) {
          setLoading(false)
        }
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [fact])

  return { image, loading, error }
}
