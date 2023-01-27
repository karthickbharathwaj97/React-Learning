import Logo from "../../assets/logo/Logo1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/" className="linkTag">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="linkTag">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="linkTag">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="linkTag">
              Cart
            </Link>
          </li>

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
