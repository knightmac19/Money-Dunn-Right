import { createContext, useReducer } from "react";

export const LangContext = createContext()

export const langReducer = (state, action) => {
  switch( action.type ) {
    case 'English':
      return { language: 'English' }
    case 'Spanish':
      return { language: 'Spanish' }
    default: 
      return state
  }
}

export const LangContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, {
    language: 'English'
  })

  return (
    <LangContext.Provider value={{...state, dispatch}}>
      {children}
    </LangContext.Provider>
  )
}