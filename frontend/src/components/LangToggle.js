import { useState } from "react";
import { useLangContext } from '../hooks/useLangContext';

const LangToggle = () => {
  const { dispatch } = useLangContext();

  const [englishFocused, setEnglishFocused] = useState('english-btn-focused')
  const [spanishFocused, setSpanishFocused] = useState('')

  const handleClick = (e) => {
    let btn = e.target.name

    if (btn === 'english-btn') {
      setEnglishFocused('english-btn-focused')
      setSpanishFocused('')
      dispatch({ type: 'ENGLISH', payload: 'ENGLISH' })
    }

    if (btn === 'spanish-btn') {
      setEnglishFocused('')
      setSpanishFocused('spanish-btn-focused')
      dispatch({ type: 'ESPAÑOL', payload: 'ESPAÑOL' })
    }
  }

  return (
    <div className='lang-container'>
      <button
        name="english-btn"
        id={englishFocused}
        onClick={handleClick}

      >
        English
      </button>
      <button
        name="spanish-btn"
        id={spanishFocused}
        onClick={handleClick}
      >
        Español
      </button>
    </div>
  );
    

}

export default LangToggle;