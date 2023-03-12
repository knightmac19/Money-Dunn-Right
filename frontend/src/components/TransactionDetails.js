const TransactionDetails = ({ transaction }) => {

  return (
    <div className="transaction-details">
      <h4>$ {transaction.amount}</h4>
      <p><strong>Category: </strong>{transaction.category}</p>
      <p><strong>Note: </strong>{transaction.description}</p>
      <p><strong>Account: </strong>{transaction.account}</p>
      <p>{transaction.date}</p>
    </div>
  );
    

}

export default TransactionDetails;