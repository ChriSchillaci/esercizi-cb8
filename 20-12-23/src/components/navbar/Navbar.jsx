import "./index.css";
import { RiCamera2Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="NavBar">
      <RiCamera2Line className="NavBar__logo"/>
      <ul className="NavBar__menu-list">
        <li>Home</li>
        <li>News</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <IoMenu className="NavBar__menu-burger"/>
    </nav>
  );
};

export default Navbar;
