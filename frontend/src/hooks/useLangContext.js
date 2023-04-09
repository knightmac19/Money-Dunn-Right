import { LangContext } from "../context/LangContext";
import { useContext } from "react";

export const useLangContext = () => {
  const context = useContext(LangContext)

  if (!context) {
    throw Error('useLangContext must be used inside a useLangContextProvider')
  }

  return context
}