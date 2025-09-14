import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom"

const Header = () => {

  let [BtnVal,setBtnVal] = useState("Login");

  return (
  <header className="header">
    <div className="header-left">
      <div className="logo-container">
        <Link to="/" className="brand-logo">
          <span className="door">Door</span>
          <span className="step">Step</span>
        </Link>
      </div>
    </div>
    <div className="header-right">
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/about">
              <span className="icon">❔</span>
              <span>About</span>
            </Link>
          </li>
          <li>
            <span className="icon">🛒</span>
            <span>Cart</span>
          </li>
          <li>
            <Link to="/contact">
              <span className="icon">👤</span>
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <div className="login-btn-container">
              <button onClick={()=>BtnVal === "Login" ? setBtnVal("Logout"):setBtnVal("Login")}>{BtnVal}</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
}

export default Header;