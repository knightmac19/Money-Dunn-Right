import { useState, useEffect } from "react";
import { useLangContext } from "../hooks/useLangContext";
import { Spanish, English } from './LangText/SideBarText'

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// import { peerRequests } from './peerRequestsData';
// import { peers } from './peersData'


const SideBar = () => {
  const { language } = useLangContext();

  const [lang, setLang] = useState(English);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (language === 'English') {
      setLang(English);
    }

    if (language === 'Spanish') {
      setLang(Spanish);
    }
    
  }, [language]);

  const acceptRequestClick = (e) => {
    console.log('accept request')
    console.log(e.target)
    console.log('call modal to confirm user selection')
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
      {/* <div className={sidebarOpen ? "" : "peers-container-hide"}>
        <div className="peers">
          <ul>{lang.peersListText}
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
          <ul>{lang.peerRequestsText}
            {peerRequests && peerRequests.map((peerRequest) => (
              <li key={peerRequest.id} className="peer-request-item">{peerRequest.email} 
                <CheckCircleOutlinedIcon  
                  className='accept-request-icon'
                  onClick={acceptRequestClick}
                  fontSize='medium'
                />
                <CloseOutlinedIcon 
                  className="reject-request-icon"
                  onClick={rejectRequestClick}
                />  
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      
    </div>
  )
}

export default SideBar;