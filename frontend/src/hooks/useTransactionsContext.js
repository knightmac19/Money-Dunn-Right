import { TransactionsContext } from "../context/TransactionContext";
import { useContext } from "react";

export const useTransactionsContext = () => {
  const context = useContext(TransactionsContext);

  if(!context) {
    throw Error('useTransactionsContext must be used inside a useTransactionsContextProvider');
  }

  return context;
}