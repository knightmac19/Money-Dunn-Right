// import { useTransactionsContext } from "../hooks/useTransactionsContext";

const IncomeDetails = ({ transaction }) => {
  // const { dispatch } = useTransactionsContext();

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
    console.log('trying to delete income!');
    
    // const res = await fetch('/api/expenses/' + transaction._id, {
    //   method: 'DELETE'
    // });
    // const json = await res.json();

    // if (res.ok) {
    //   dispatch({type: 'DELETE_EXPENSE', payload: json})
    // }
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