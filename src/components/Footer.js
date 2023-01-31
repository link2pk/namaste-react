import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="text-center text-xs">
      <h6>FoodVilla : &copy; Copyright 2023</h6> {user.name}
    </footer>
  );
};

export default Footer;
