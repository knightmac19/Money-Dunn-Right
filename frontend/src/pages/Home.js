import { useEffect, useState } from "react";


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
          <p key={transaction._id}>{transaction.description}</p>
        ))}
      </div>
    </div>
  )
}

export default Home;