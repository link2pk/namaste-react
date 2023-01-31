import { useContext, useState } from "react";
import Logo from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";

const loggedIn = () => {
  //api call for authentication
  return false;
};

const Title = () => {
  return (
    <Link to={"/"} className="w-24 h-20 block sm:justify-self-start">
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

  const { user } = useContext(UserContext);
  return (
    <header className="py-3 sm:py-0  grid gap-2 sm:grid-cols-[1fr_18rem_1fr] justify-items-center sm:items-center bg-header-bg shadow">
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
      <section className="sm:flex sm:justify-self-end gap-2 ">
        <div className="text-center">{isOnline ? "🟢" : "⚪"}</div>
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
        <span>{user.name}</span>
      </section>
    </header>
  );
};

export default Header;
