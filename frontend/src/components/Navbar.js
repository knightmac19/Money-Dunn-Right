import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import LangToggle from "./LangToggle";
import { useLangContext } from "../hooks/useLangContext";
import { Spanish, English } from './LangText/NavbarText';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { language } = useLangContext();

  const [lang, setLang] = useState(English);

  useEffect(() => {
    if (language === 'English') {
      setLang(English)
    }

    if (language === 'Spanish') {
      setLang(Spanish)
    }
    
  }, [language]);

  const handleClick = (e) => {
    logout();
  }

  return (
    <header>
      <div className="container">
        <div className="nav-title-container">
          <Link to="/">
            <h1 className="nav-header-large">Money Dunn Right</h1>
            <h1 className="nav-header-small">MDR</h1>
          </Link>
          <LangToggle />
        </div>
        <nav>
          {user && (
            <div className="user-email-container">
              <h3>{user.email}</h3>
              <button onClick={handleClick}>{lang.logoutBtnText}</button>
            </div>
          )}
          {!user && (
            <div className="nav-container">
              <Link to="/login">{lang.loginLinkText}</Link>
              <Link to="/signup">{lang.logoutLinkText}</Link>
            </div>
          )}
        </nav>

      </div>
    </header>
  );
    

}

export default Navbar;