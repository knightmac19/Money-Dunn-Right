import { useTransactionsContext } from "../hooks/useTransactionsContext";

const TransactionDetails = ({ transaction }) => {
  const { dispatch } = useTransactionsContext();


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
      <p>{transaction.date}</p>
      <span onClick={handleClick}>DEL</span>
    </div>
  );
    

}

export default TransactionDetails;