import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { useLangContext } from '../hooks/useLangContext'
import { Spanish, English } from '../components/LangText/LoginPageText'

const Login = () => {
  const { language } = useLangContext();

  const [lang, setLang] = useState(English);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  useEffect(() => {
    if (language === 'English') {
      setLang(English)
    }

    if (language === 'Spanish') {
      setLang(Spanish)
    }
    
  }, [language]);

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h3>{lang.formLabel}</h3>

        <label>{lang.emailLabel}</label>
        <input 
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>{lang.passwordLabel}</label>
        <input 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoading} className='add-transaction-btn'>{lang.buttonText}</button>
        <div className='form-link'>
          <Link to="/signup">{lang.linkText}</Link>
        </div>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>

  )
}

export default Login;