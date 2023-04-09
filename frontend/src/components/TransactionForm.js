import { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import IncomeForm from './IncomeForm';
import { useLangContext } from '../hooks/useLangContext';
import { Spanish, English } from './LangText/TransactionFormText';

const TransactionForm = () => {
  const { language } = useLangContext();

  const [lang, setLang] = useState(English)
  const [formType, setFormType] = useState('EXPENSE')
  const [expenseFocused, setExpenseFocused] = useState('expense-form-btn-focused')
  const [incomeFocused, setIncomeFocused] = useState('')
  const [hideFocused, setHideFocused] = useState('')

  useEffect(() => {
    if (language === 'English') {
      setLang(English)
    }

    if (language === 'Spanish') {
      setLang(Spanish)
    }
    
  }, [language]);


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
      <h3 className='form-header'>{lang.formLabel}</h3>
      <div className='form-buttons-container'>
        <button
          name='expense-form-btn'
          id={expenseFocused}
          onClick={handleClick}
        >{lang.expenseBtnText}</button>
        <button
          name='income-form-btn'
          id={incomeFocused}
          onClick={handleClick}
        >{lang.incomeBtnText}</button>
        <button
          name='hide-form-btn'
          id={hideFocused}
          onClick={handleClick}
        >{lang.hideBtnText}</button>
      </div>
      {formType === 'HIDE' ? <div></div> : (formType === 'EXPENSE' ? <ExpenseForm /> : <IncomeForm />)}
    </div>
  )
}

export default TransactionForm;