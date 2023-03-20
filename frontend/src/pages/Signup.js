import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(email, password)
    await signup(email, password)
  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <label>Email:</label>
        <input 
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>
        <input 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoading} className='add-transaction-btn'>Sign up</button>
        <div className='form-link'>
          <Link to="/login">Or log in instead</Link>
        </div>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
    
  )
}

export default Signup;