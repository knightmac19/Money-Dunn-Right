import { useState, useEffect } from 'react';
import validator from 'validator'
import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { useLangContext } from '../hooks/useLangContext';
import { Spanish, English } from './LangText/IncomeFormText';
import TransactionLoader from './TransactionLoader';

const IncomeForm = () => {
  const { dispatch } = useTransactionsContext();
  const { user } = useAuthContext();
  const { language } = useLangContext();
  
  const [loading, setLoading] = useState(false)
  const [lang, setLang] = useState(English);
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [dateError, setDateError] = useState('')
	
  const validateDate = (value) => {
    
    if (validator.isDate(value)) {
      setDate(value);
    } else {
      setDateError(lang.invalidDateErr);
    }
  }

  useEffect(() => {
    if (language === 'English') {
      setLang(English)
    }

    if (language === 'Spanish') {
      setLang(Spanish)
    }
    
  }, [language]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (!user) {
      setError(lang.notUserErr);
      return
    }

    const income = { amount, source, date }

    const response = await fetch('/api/income/', {
      method: 'POST',
      body: JSON.stringify(income),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(lang.missingFieldsErr);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setAmount('');
      setSource('');
      setDate('');
      setError(null);
      setEmptyFields([]);
      console.log('New Income Added!');
      dispatch({type: 'CREATE_TRANSACTION', payload: json})
      setLoading(false)
    }
  }

  return (
    <div>
      { loading ? <TransactionLoader></TransactionLoader> : 
        <form className='create' onSubmit={handleSubmit}>
        

        <label>{lang.amountLabel}</label>
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          min="0.00"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className={emptyFields.includes('amount') ? 'error' : ''}
        />

        <label>{lang.sourceLabel}</label>
        <input
          type="text"
          maxLength="30"
          minLength="0"
          placeholder={lang.sourcePlaceholder}
          onChange={(e) => setSource(e.target.value)}
          value={source}
          className={emptyFields.includes('source') ? 'error' : ''}
        />

        <label>{lang.dateLabel}</label>
        <input
          type="date"
          placeholder={lang.datePlaceholder}
          onChange={(e) => validateDate(e.target.value)}
          value={date}
          className={emptyFields.includes('date') ? 'error' : ''}
        />
        <br />
        <span 
          style={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >{dateError}</span>

        <button className='add-transaction-btn'>{lang.buttonText}</button>
        {error && <div className='error'>{error}</div>}
      </form>
    }
  </div>
  )
}

export default IncomeForm;