import { useState, useEffect } from "react";
import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { useLangContext } from "../hooks/useLangContext";
import { Spanish, English, englishMonths, spanishMonths } from './LangText/IncomeDetailsText';

const IncomeDetails = ({ transaction }) => {
  const generatedDate = new Date(transaction.date).toISOString();

  const formatSpanishDate = (date) => {
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8,10)

    if (month[0] === '0') {
      month = spanishMonths[month[1]];
    } else {
      month = spanishMonths[month]
    }

    return `${day} ${month} ${year}`;
  }

  const formatEnglishDate = (date) => {
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8,10)

    if (month[0] === '0') {
      month = englishMonths[month[1]];
    } else {
      month = englishMonths[month]
    }

    return `${month} ${day} ${year}`;
  }

  const { dispatch } = useTransactionsContext();
  const { user } = useAuthContext();
  const { language } = useLangContext();

  const [lang, setLang] = useState(English);
  const [usedDate, setUsedDate] = useState(formatEnglishDate(generatedDate))

  useEffect(() => {
    if (language === 'English') {
      setLang(English);
      setUsedDate(formatEnglishDate(generatedDate));
    }

    if (language === 'Spanish') {
      setLang(Spanish);
      setUsedDate(formatSpanishDate(generatedDate))
    }
    
  }, [language]);
  

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