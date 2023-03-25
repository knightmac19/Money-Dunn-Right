import { useState } from "react";

const LangToggle = () => {
  const [englishFocused, setEnglishFocused] = useState('english-btn-focused')
  const [spanishFocused, setSpanishFocused] = useState('')

  const handleClick = (e) => {
    let btn = e.target.name

    if (btn === 'english-btn') {
      setEnglishFocused('english-btn-focused')
      setSpanishFocused('')
    }

    if (btn === 'spanish-btn') {
      setEnglishFocused('')
      setSpanishFocused('spanish-btn-focused')
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