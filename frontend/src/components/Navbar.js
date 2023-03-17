import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Money Dunn Right</h1>
        </Link>
        <nav>
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