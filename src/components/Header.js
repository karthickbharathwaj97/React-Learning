import Logo from "../../assets/logo/Logo1.png";
import { useState } from "react";
import "../App.css";
const LogoImg = () => {
  return (
    <a href="/">
      <img className="logo-img" src={Logo} alt="Logo Img" />
    </a>
  );
};

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="navbar">
      <LogoImg />
      <div className="nav-elements">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
          {isLoggedIn ? (
            <>
              <li>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  Login
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
