import { useEffect } from "react";
import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from '../hooks/useAuthContext'

// components
import TransactionDetails from "../components/TransactionDetails";
import IncomeDetails from "../components/IncomeDetails";
import TransactionForm from "../components/TransactionForm";


const Home = () => {
  const {transactions, dispatch} = useTransactionsContext();
  const {user} = useAuthContext()

  // sort by date
  const byDate = (a, b) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  }
  

  useEffect(() => {
    // console.log('is useEffect firing?')
    const fetchTransactions = async () => {
      // console.log('is fetchTransactions firing?')
      const expensesResponse = await fetch('https://money-dunn-right.onrender.com/api/expenses', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const expensesJson = await expensesResponse.json();

      const incomeResponse = await fetch('https://money-dunn-right.onrender.com/api/income', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const incomeJson = await incomeResponse.json();
      
      const fullJson = await expensesJson.concat(incomeJson);

      const sortedJson = await fullJson.sort(byDate)

      if (expensesResponse.ok && incomeResponse.ok){
        dispatch({type: 'SET_TRANSACTIONS', payload: sortedJson});
      }
    }


    if (user) {
      fetchTransactions();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <TransactionForm />
      <div className="transactions">
        { transactions && transactions.map((transaction) => (
          transaction.source ? 
          <IncomeDetails key={transaction._id} transaction={transaction} /> :
          <TransactionDetails key={transaction._id} transaction={transaction} />
        ))}
      </div>
      
    </div>
  )
}

export default Home;