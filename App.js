import React from "react";
import ReactDOM from "react-dom/client";
import logoimg from "./img/logo.jpg";
import usericon from "./img/user.png";
/*
Create a Header Component from scratch using Functional Components with JSX
Add a Logo on left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice
*/
const logo = <img src={logoimg} className="img-fluid" alt="logo" />,
  user = <img src={usericon} className="img-fluid" alt="user icon" />;

const Header = () => {
  return (
    <header className="main-header">
      <div>{logo}</div>

      <form className="search-form">
        <div className="search-wrap">
          <input
            type="search"
            name="mainsearch"
            id="search-input"
            placeholder="Search..."
            className="form-control"
          />
          <button type="submit" className="btn-submit"></button>
        </div>
      </form>

      <div>{user}</div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
