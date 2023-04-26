import { useState } from "react";
import { useLangContext } from '../hooks/useLangContext';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { peerRequests } from './peerRequestsData';
import { peers } from './peersData'


const SideBar = () => {

  

  const { dispatch } = useLangContext();

  const [englishFocused, setEnglishFocused] = useState('english-btn-focused')
  const [spanishFocused, setSpanishFocused] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [acceptClicks, setAcceptClicks] = useState(0)
  const [acceptIconSize, setAcceptIconSize] = useState('medium')
  // const [acceptIconClass, setAcceptIconClass] = useState('accept-request-icon')

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

  const acceptRequestClick = (e) => {
    console.log('accept request')
    console.log(e.target)
    setAcceptIconSize('large')
  }

  const rejectRequestClick = (e) => {
    console.log('reject request')
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const removePeerClick = (e) => {
    console.log('removePeerClick')
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
      <div className={sidebarOpen ? "" : "peers-container-hide"}>
        <div className="peers">
          <ul>My Peers
            {peers && peers.map((peer) => (
              <li key={peer.id} className="peers-item">{peer.email} 
                <CloseOutlinedIcon 
                  className="reject-request-icon"
                  onClick={removePeerClick}
                />
              </li>  
            ))}
          </ul>
        </div>
        <div className="peer-requests">
          <ul>Peer Requests
            {peerRequests && peerRequests.map((peerRequest) => (
              <li key={peerRequest.id} className="peer-request-item">{peerRequest.email} 
                <CheckCircleOutlinedIcon  
                  className='accept-request-icon'
                  onClick={acceptRequestClick}
                  fontSize={acceptIconSize}
                />
                <CloseOutlinedIcon 
                  className="reject-request-icon"
                  onClick={rejectRequestClick}
                />  
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar;