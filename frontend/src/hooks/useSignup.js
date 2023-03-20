import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    console.log('inside signup hook', email, password)

    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    console.log(response)
    const json = await response.json()
    const text = await response.text()
    console.log(text)

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update auth context
      dispatch({ type: 'LOGIN', payload: json})

      setIsLoading(false)
    }
  }

  return { signup, isLoading, error}
}