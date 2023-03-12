import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="text-center text-xs">
      <h6>&copy; Copyright 2023 : FoodVilla made with ❤️ by {user.name} </h6>
    </footer>
  );
};

export default Footer;
