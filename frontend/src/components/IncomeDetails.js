import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from '../hooks/useAuthContext';

const IncomeDetails = ({ transaction }) => {
  const { dispatch } = useTransactionsContext();
  const { user } = useAuthContext();

  const generatedDate = new Date(transaction.date).toISOString();
  

  const months = [
    'empty', 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ]
  const formatDate = (date) => {
    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8,10)

    if (month[0] === '0') {
      month = months[month[1]];
    } else {
      month = months[month]
    }

    return `${month} ${day} ${year}`;
  }
  

  const handleClick = async () => {
    if (!user) {
      return
    }

    const res = await fetch('https://money-dunn-right.onrender.com/api/income/' + transaction._id, {
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
      <p><strong>Source: </strong>{transaction.source}</p>
      <p>{formatDate(generatedDate)}</p>
      <span
       onClick={handleClick}
       className='material-symbols-outlined'
      >delete
      </span>
    </div>
  );
    

}

export default IncomeDetails;