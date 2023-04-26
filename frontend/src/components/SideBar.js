import { useState } from "react";
import { useLangContext } from '../hooks/useLangContext';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';


const SideBar = () => {

  const { dispatch } = useLangContext();

  const [englishFocused, setEnglishFocused] = useState('english-btn-focused')
  const [spanishFocused, setSpanishFocused] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (e) => {
    let btn = e.target.name

    if (btn === 'english-btn') {
      setEnglishFocused('english-btn-focused')
      setSpanishFocused('')
      dispatch({ type: 'English', payload: 'English' })
    }

    if (btn === 'spanish-btn') {
      setEnglishFocused('')
      setSpanishFocused('spanish-btn-focused')
      dispatch({ type: 'Spanish', payload: 'Spanish' })
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    
    <div className={sidebarOpen ? "sidebar" : "sidebar-closed"}>
      <button className="arrow-icon-btn">
        {sidebarOpen ? <ArrowCircleLeftOutlinedIcon  fontSize="large" onClick={toggleSidebar} /> : <ArrowCircleRightOutlinedIcon className="white-arrow" fontSize="large" onClick={toggleSidebar} /> }
        
      </button>
      <div className={sidebarOpen ? "lang-container" : "lang-container-hide"}>
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
    </div>
  )
}

export default SideBar;