import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__btns">
        <Link to={"/"}>
          <button className="Navbar__btns__btn">Home</button>
        </Link>
        <Link to={"/contacts"}>
          <button className="Navbar__btns__btn">Contact Us</button>
        </Link>
        <Link to={"/about"}>
          <button className="Navbar__btns__btn">About</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
