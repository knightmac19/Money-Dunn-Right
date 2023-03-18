import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
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

        <button className='add-transaction-btn'>Sign up</button>
        <div className='form-link'>
          <Link to="/login">Or log in instead</Link>
        </div>
      </form>
    </div>
    
  )
}

export default Signup;