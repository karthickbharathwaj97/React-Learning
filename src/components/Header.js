import Logo from "../../assets/logo/Logo1.png";
import React from "react";
import "../App.css";
const LogoImg = () => {
  return (
    <a href="/">
      <img className="logo-img" src={Logo} alt="Logo Img" />
    </a>
  );
};

function Header() {
  return (
    <div className="navbar">
      <LogoImg />
      <div className="nav-elements">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
