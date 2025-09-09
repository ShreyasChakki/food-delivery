import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {

  let [BtnVal,setBtnVal] = useState("Login");

  return (
  <header className="header">
    <div className="header-left">
      <div className="logo-container">
        <img
          className="logo"
          alt="Food Logo"
          src={LOGO_URL}
        />
      </div>
    </div>
    <div className="header-right">
      <nav className="nav-items">
        <ul>
          <li>
            <span className="icon">🔍</span>
            <span>Search</span>
          </li>
          <li>
            <span className="icon">🎁</span>
            <span>Offers<sup>NEW</sup></span>
          </li>
          <li>
            <span className="icon">❔</span>
            <span>Help</span>
          </li>
          <li>
            <span className="icon">👤</span>
            <span>Sign In</span>
          </li>
          <li>
            <span className="icon">🛒</span>
            <span>Cart</span>
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