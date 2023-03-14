import { createContext, useReducer } from "react";

export const TransactionsContext = createContext();

export const transactionsReducer = (state, action) => {
  switch (action.type) {
    // this is currently being used for a combined view of Income + Expense entries
    case 'SET_TRANSACTIONS':
      return {
        expenses: action.payload
      }
    case 'CREATE_EXPENSE':
      return {
        expenses: [action.payload, ...state.expenses]
      }
    case 'DELETE_EXPENSE':
      return {
        expenses: state.expenses.filter((t) => t._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const TransactionsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, {
    expenses: null
  });

  return (
    <TransactionsContext.Provider value={{...state, dispatch}}>
      { children }

    </TransactionsContext.Provider>
  )

}