import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = (e) => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="nav-header-large">Money Dunn Right</h1>
          <h1 className="nav-header-small">MDR</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div className="nav-container">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>

      </div>
    </header>
  );
    

}

export default Navbar;