import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

// import ExpenseForm from './ExpenseForm';
import IncomeForm from './IncomeForm';

const TransactionForm = () => {
  const [form, setForm] = useState('EXPENSE')



  return (
    <div>
      {/* <ExpenseForm /> */}
      {/* <IncomeForm /> */}
      {form === 'HIDE' ? <div></div> : (form === 'EXPENSE' ? <ExpenseForm /> : <IncomeForm />)}
    </div>
  )
}

export default TransactionForm;