import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>

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

        <button disabled={isLoading} className='add-transaction-btn'>Log in </button>
        <div className='form-link'>
          <Link to="/signup">Or sign up instead</Link>
        </div>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>

  )
}

export default Login;