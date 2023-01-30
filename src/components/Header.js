import { useState } from "react";
import Logo from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const loggedIn = () => {
  //api call for authentication
  return false;
};

const Title = () => {
  return (
    <Link to={"/"} className="w-24 h-20 block">
      <img
        src={Logo}
        alt="logo"
        className="object-cover w-full h-full mix-blend-darken "
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());
  const isOnline = useIsOnline();
  return (
    <header className="py-3 sm:py-0  grid gap-2 sm:grid-cols-[6rem_1fr_6rem] justify-items-center sm:items-center bg-header-bg ">
      <Title />
      <ul className="flex gap-3">
        <li>
          <Link className="hover:underline" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to={"/about"}>
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to={"/cart"}>
            Cart
          </Link>
        </li>
      </ul>
      <section className="sm:flex gap-2">
        <div>{isOnline ? "🟢" : "⚪"}</div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              // setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              //  setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </section>
    </header>
  );
};

export default Header;
