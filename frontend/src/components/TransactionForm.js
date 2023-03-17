import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

// import ExpenseForm from './ExpenseForm';
import IncomeForm from './IncomeForm';

const TransactionForm = () => {
  const [formType, setFormType] = useState('EXPENSE')

  const [expenseFocused, setExpenseFocused] = useState('expense-form-btn-focused')
  const [incomeFocused, setIncomeFocused] = useState('')
  const [hideFocused, setHideFocused] = useState('')


  const handleClick = (e) => {
    let btn = e.target.name
    if (btn === 'income-form-btn') {
      setExpenseFocused('')
      setIncomeFocused('income-form-btn-focused')
      setHideFocused('')

      setFormType('')
    }

    if (btn === 'expense-form-btn') {
      setExpenseFocused('expense-form-btn-focused')
      setIncomeFocused('')
      setHideFocused('')

      setFormType('EXPENSE')
    }

    if (btn === 'hide-form-btn') {
      setExpenseFocused('')
      setIncomeFocused('')
      setHideFocused('hide-form-btn-focused')

      setFormType('HIDE')
    }

  }

  return (
    <div>
      <h3 className='form-header'>Add A Transaction</h3>
      <div className='form-buttons-container'>
        <button
          name='expense-form-btn'
          id={expenseFocused}
          onClick={handleClick}
        >Expense</button>
        <button
          name='income-form-btn'
          id={incomeFocused}
          onClick={handleClick}
        >Income</button>
        <button
          name='hide-form-btn'
          id={hideFocused}
          onClick={handleClick}
        >Hide</button>
      </div>
      {formType === 'HIDE' ? <div></div> : (formType === 'EXPENSE' ? <ExpenseForm /> : <IncomeForm />)}
    </div>
  )
}

export default TransactionForm;