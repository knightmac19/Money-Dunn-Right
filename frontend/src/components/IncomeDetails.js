import { useState, useEffect } from "react";
import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { useLangContext } from "../hooks/useLangContext";
import { Spanish, English } from './LangText/IncomeDetailsText';
import { formatEnglishDate, formatSpanishDate } from "./LangText/HandleDate";

const IncomeDetails = ({ transaction }) => {
  const generatedDate = new Date(transaction.date).toISOString();

  const { dispatch } = useTransactionsContext();
  const { user } = useAuthContext();
  const { language } = useLangContext();

  const [lang, setLang] = useState(English);
  const [usedDate, setUsedDate] = useState(formatEnglishDate(generatedDate));

  useEffect(() => {
    if (language === 'English') {
      setLang(English);
      setUsedDate(formatEnglishDate(generatedDate));
    }

    if (language === 'Spanish') {
      setLang(Spanish);
      setUsedDate(formatSpanishDate(generatedDate))
    }
    
  }, [language, generatedDate]);
  

  const handleClick = async () => {
    if (!user) {
      return
    }

    const res = await fetch('/api/income/' + transaction._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({type: 'DELETE_TRANSACTION', payload: json})
    }
  }

  return (
    <div className="transaction-details">
      <h4 className="income-details-amount">+ ${transaction.amount}</h4>
      <p><strong>{lang.sourceLabel}</strong>{transaction.source}</p>
      <p>{usedDate}</p>
      <span
       onClick={handleClick}
       className='material-symbols-outlined'
      >delete
      </span>
    </div>
  );
    

}

export default IncomeDetails;