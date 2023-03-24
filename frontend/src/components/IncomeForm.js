import { useState } from 'react';
import validator from 'validator'
import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from '../hooks/useAuthContext';

const IncomeForm = () => {
  const { dispatch } = useTransactionsContext();
  const { user } = useAuthContext();
  
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
      setDateError('Enter Valid Date!');
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in')
      return
    }

    const income = { amount, source, date }

    const response = await fetch(`${process.env.API}/api/income/`, {
      method: 'POST',
      body: JSON.stringify(income),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
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
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      

      <label>Amount </label>
      <input
        type="number"
        step="0.01"
        placeholder="0.00"
        min="0.00"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        className={emptyFields.includes('amount') ? 'error' : ''}
      />

      <label>Source </label>
      <input
        type="text"
        maxLength="30"
        minLength="0"
        placeholder="Enter Source"
        onChange={(e) => setSource(e.target.value)}
        value={source}
        className={emptyFields.includes('source') ? 'error' : ''}
      />

      <label>Date </label>
      <input
        type="date"
        placeholder="yyyy-mm-dd"
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

      <button className='add-transaction-btn'>Add Income</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default IncomeForm;