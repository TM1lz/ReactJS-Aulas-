import { useEffect, useState } from 'react'

// Custom Hook: useFetch
export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)  // Start loading state
      setError(null)    // Reset any previous errors
      try {
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error('Failed to fetch data') // If response isn't OK, throw an error
        }

        const json = await res.json() // Ensure we await the JSON parsing
        setData(json) // Set the data to state
      } catch (err) {
        setError(err.message) // Set error message if something goes wrong
      } finally {
        setLoading(false) // Stop loading state after data is fetched (or error occurs)
      }
    }

    fetchData()
  }, [url]) // Only re-fetch if URL changes

  return { data, loading, error }
}
