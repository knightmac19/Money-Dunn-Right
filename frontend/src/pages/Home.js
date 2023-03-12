import { useEffect, useState } from "react";

// components
import TransactionDetails from "../components/TransactionDetails";


const Home = () => {

  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch('/api/transactions');
      const json = await res.json();

      if (res.ok){
        setTransactions(json);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <div className="home">
      <div className="transactions">
        { transactions && transactions.map((transaction) => (
          <TransactionDetails 
            key={transaction._id} 
            transaction={transaction} 
          />
        ))}
      </div>
    </div>
  )
}

export default Home;