import { useEffect } from "react";
import { useTransactionsContext } from "../hooks/useTransactionsContext";

// components
import TransactionDetails from "../components/TransactionDetails";
import IncomeDetails from "../components/IncomeDetails";
import TransactionForm from "../components/TransactionForm";


const Home = () => {

  const {expenses, dispatch} = useTransactionsContext();

  // sort by date
  const byDate = (a, b) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  }
  

  useEffect(() => {
    // console.log('is useEffect firing?')
    const fetchExpenses = async () => {
      // console.log('is fetchExpenses firing?')
      const expensesResponse = await fetch('/api/expenses');
      const expensesJson = await expensesResponse.json();

      const incomeResponse = await fetch('/api/income');
      const incomeJson = await incomeResponse.json();
      
      const fullJson = await expensesJson.concat(incomeJson);

      const sortedJson = await fullJson.sort(byDate)

      if (expensesResponse.ok && incomeResponse.ok){
        dispatch({type: 'SET_TRANSACTIONS', payload: sortedJson});
      }
    }

    fetchExpenses();
  }, [dispatch]);

  return (
    <div className="home">
      <TransactionForm />
      <div className="transactions">
        { expenses && expenses.map((transaction) => (
          transaction.source ? 
          <IncomeDetails key={transaction._id} transaction={transaction} /> :
          <TransactionDetails key={transaction._id} transaction={transaction} />
        ))}
      </div>
      
    </div>
  )
}

export default Home;