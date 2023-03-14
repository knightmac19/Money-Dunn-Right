import { useEffect } from "react";
import { useTransactionsContext } from "../hooks/useTransactionsContext";

// components
import TransactionDetails from "../components/TransactionDetails";
import TransactionForm from "../components/TransactionForm";


const Home = () => {

  const {expenses, dispatch} = useTransactionsContext();
  

  useEffect(() => {
    // console.log('is useEffect firing?')
    const fetchExpenses = async () => {
      // console.log('is fetchExpenses firing?')
      const res = await fetch('/api/expenses');
      const json = await res.json();
      // console.log(json)

      if (res.ok){
        dispatch({type: 'SET_TRANSACTIONS', payload: json});
      }
    }

    fetchExpenses();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="transactions">
        { expenses && expenses.map((transaction) => (
          <TransactionDetails 
            key={transaction._id} 
            transaction={transaction} 
          />
        ))}
      </div>
      <TransactionForm />
    </div>
  )
}

export default Home;