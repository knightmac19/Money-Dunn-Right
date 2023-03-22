import { useState } from 'react';
import validator from 'validator'
import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from '../hooks/useAuthContext';

const ExpenseForm = () => {
  const { dispatch } = useTransactionsContext();
  const { user } = useAuthContext();

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [account, setAccount] = useState('');
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

    const transaction = { amount, category, description, account, date }

    const response = await fetch('https://money-dunn-right.onrender.com/api/expenses', {
      method: 'POST',
      body: JSON.stringify(transaction),
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
      setCategory('');
      setDescription('');
      setAccount('');
      setDate('');
      setError(null);
      setEmptyFields([]);
      console.log('New Transaction Added!');
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

      <label>Category </label>
      <input
        type="text"
        maxLength="30"
        minLength="0"
        placeholder="Enter Category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className={emptyFields.includes('category') ? 'error' : ''}
      />

      <label>Note </label>
      <input
        type="text"
        maxLength="120"
        minLength="0"
        placeholder="Add Note"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <label>Account </label>
      <input
        type="text"
        maxLength="30"
        minLength="0"
        placeholder="Enter Account Name"
        onChange={(e) => setAccount(e.target.value)}
        value={account}
        className={emptyFields.includes('account') ? 'error' : ''}
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

      <button className='add-transaction-btn'>Add Expense</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default ExpenseForm;