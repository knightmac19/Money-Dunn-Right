const TransactionDetails = ({ transaction }) => {

  return (
    <div className="transaction-details">
      <h4>{transaction.category}</h4>
      <p><strong>Amount: </strong>{transaction.amount}</p>
      <p><strong>Note: </strong>{transaction.description}</p>
      <p><strong>Account: </strong>{transaction.account}</p>
      <p>{transaction.date}</p>
    </div>
  );
    

}

export default TransactionDetails;