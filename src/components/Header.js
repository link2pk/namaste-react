import { useState } from "react";
import Logo from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";

const loggedIn = () => {
  //api call for authentication
  return false;
};

const Title = () => {
  return (
    <Link to={"/"} className="logo-a">
      <img src={Logo} alt="logo" />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());

  return (
    <header className="main-header">
      <Title />
      <ul className="main-nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <button
          onClick={() => {
            // setIsLoggedIn(false);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={() => {
            //  setIsLoggedIn(true);
          }}
        >
          login
        </button>
      )}
    </header>
  );
};

export default Header;
