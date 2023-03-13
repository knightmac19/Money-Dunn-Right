import { useState } from 'react';
import validator from 'validator'

const TransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

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

    const transaction = { amount, category, description, account, date }

    const response = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify(transaction),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setAmount(0);
      setCategory('');
      setDescription('');
      setAccount('');
      setDate('');
      setError(null);
      console.log('New Transaction Added!');
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a Transaction</h3>

      <label>Amount </label>
      <input
        type="number"
        step="0.01"
        placeholder="0.00"
        min="0.00"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />

      <label>Category </label>
      <input
        type="text"
        maxLength="30"
        minLength="0"
        placeholder="Enter Category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />

      <label>Note </label>
      <input
        type="text"
        maxLength="120"
        minLength="0"
        placeholder="Add Note"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Account </label>
      <input
        type="text"
        maxLength="30"
        minLength="0"
        placeholder="Enter Account Name"
        onChange={(e) => setAccount(e.target.value)}
        value={account}
      />

      <label>Date </label>
      <input
        type="date"
        placeholder="yyyy-mm-dd"
        onChange={(e) => validateDate(e.target.value)}
        value={date}
      />
      <br />
      <span 
        style={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >{dateError}</span>

      <button>Add Transaction</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default TransactionForm;