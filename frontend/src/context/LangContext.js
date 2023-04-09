import { createContext, useReducer } from "react";

export const LangContext = createContext()

export const langReducer = (state, action) => {
  switch( action.type ) {
    case 'ENGLISH':
      return { language: 'ENGLISH' }
    case 'ESPAÑOL':
      return { language: 'ESPAÑOL' }
    default: 
      return state
  }
}

export const LangContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, {
    language: 'ENGLISH'
  })

  return (
    <LangContext.Provider value={{...state, dispatch}}>
      {children}
    </LangContext.Provider>
  )
}