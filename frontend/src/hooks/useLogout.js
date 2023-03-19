import { useAuthContext } from './useAuthContext'
import { useTransactionsContext } from './useTransactionsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: transactionsDispatch } = useTransactionsContext()

  const logout = () => {
    // remove the user obj from local storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({type: 'LOGOUT'})
    transactionsDispatch({ type: 'SET_TRANSACTIONS', payload: null })
  }

  return { logout }
}