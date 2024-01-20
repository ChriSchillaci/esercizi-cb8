import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img
        className="Navbar-img"
        src="https://www.logolynx.com/images/logolynx/aa/aa3993182ad88a047d21fbcc09b44d04.png"
        alt=""
      />
      <div className="Navbar__btns">
        <Link to="/">
          <button className="Navbar__btns-btn">Home</button>
        </Link>
        <Link to="/">
          <button className="Navbar__btns-btn">About</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
