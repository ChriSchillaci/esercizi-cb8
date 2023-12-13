import React from "react";
import './NavBar.css'
import { IoMenu } from "react-icons/io5"

function NavBar() {
  return (
    <nav>
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png"
        alt="Bob"
      />
      <ul>
        <li>Home</li>
        <li>Category</li>
        <li>Pippo</li>
        <li>About</li>
      </ul>
      <input type="text" />
      <IoMenu  className="burger-icon"/>
    </nav>
  );
}

export default NavBar;
