import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
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

        <button className='add-transaction-btn'>Log in </button>
        <div className='form-link'>
          <Link to="/signup">Or sign up instead</Link>
        </div>
        
      </form>
    </div>

  )
}

export default Login;