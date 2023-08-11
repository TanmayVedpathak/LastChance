import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logoDiv">
          <img src={logo} alt="logo" />
          <h1>LAST CAHNCE</h1>
        </div>
        <div className="listDiv">
          <ul className={toggle ? "navList toggleMenu" : "navList"}>
            <li className="navItem">Login</li>
            <li className="navItem">Donte Now</li>
            <li className="navItem">Take Action</li>
            <li className="navItem">Menu</li>
          </ul>
        </div>
        <div onClick={() => setToggle(!toggle)} className="menuBtn">
          <FaBars />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
