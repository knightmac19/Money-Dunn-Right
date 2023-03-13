import { useState } from 'react';
import validator from 'validator'

const TransactionForm = () => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [account, setAccount] = useState('');
  const [date, setDate] = useState('');

  const [errorMessage, setErrorMessage] = useState('')
	
  const validateDate = (value) => {
    
    if (validator.isDate(value)) {
      setErrorMessage('Valid Date :)');
      setDate(value);
    } else {
      setErrorMessage('Enter Valid Date!');
    }
  }

  


  return (
    <form className='create'>
      <h3>Add a Transaction</h3>

      <label>Amount</label>
      <input
        type="number"
        step="0.01"
        placeholder="0.00"
        min="0.00"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />

      <label>Category</label>
      <input
        type="text"
        maxLength="30"
        minLength="0"
        placeholder="Enter Category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />

      <label>Note</label>
      <input
        type="text"
        maxLength="120"
        minLength="0"
        placeholder="Add Note"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Account</label>
      <input
        type="text"
        maxLength="30"
        minLength="0"
        placeholder="Enter Account Name"
        onChange={(e) => setAccount(e.target.value)}
        value={account}
      />

      <label>Date</label>
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
      >{errorMessage}</span>

      <button>Add Transaction</button>
    </form>
  )
}

export default TransactionForm;