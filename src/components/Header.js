import { useContext, useState } from "react";
import Logo from "../assets/img/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedIn = () => {
  //api call for authentication
  return true;
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

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="py-3 sm:py-0  grid gap-2 sm:grid-cols-[1fr_20rem_1fr] justify-items-center sm:items-center bg-header-bg shadow">
      <Title />
      <ul className="flex gap-3">
        <li>
          <NavLink className="hover:underline [&.active]:underline" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:underline  [&.active]:underline"
            to={"/about"}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:underline  [&.active]:underline"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:underline  [&.active]:underline"
            to={"/cart"}
          >
            Cart {cartItems.length} item(s)
          </NavLink>
        </li>
      </ul>
      <section className="sm:flex sm:justify-self-end gap-2 ">
        <div className="text-center">{isOnline ? "🟢" : "⚪"}</div>
        {/* {isLoggedIn ? (
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
        )} */}
        <span>{user.name}</span>
      </section>
    </header>
  );
};

export default Header;
