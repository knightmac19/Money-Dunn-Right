import { useTransactionsContext } from "../hooks/useTransactionsContext";

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import format from 'date-fns/format';

const TransactionDetails = ({ transaction }) => {
  const { dispatch } = useTransactionsContext();

  const generatedDate = new Date(transaction.date).toISOString();
  

  const months = ['empty', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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


  // console.log(formatDate(generatedDate))
  

  const handleClick = async () => {
    const res = await fetch('/api/transactions/' + transaction._id, {
      method: 'DELETE'
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({type: 'DELETE_TRANSACTION', payload: json})
    }
  }

  return (
    <div className="transaction-details">
      <h4>- ${transaction.amount}</h4>
      <p><strong>Category: </strong>{transaction.category}</p>
      <p><strong>Note: </strong>{transaction.description}</p>
      <p><strong>Account: </strong>{transaction.account}</p>
      {/* <p>{formatDistanceToNow(new Date(transaction.date), {addSuffix: true})}</p> */}
      {/* <p>{generatedDate}</p> */}
      <p>{formatDate(generatedDate)}</p>
      <span
       onClick={handleClick}
       className='material-symbols-outlined'
      >delete
      </span>
    </div>
  );
    

}

export default TransactionDetails;