import React from "react";
import ReactDOM from "react-dom/client";

/*
Header => Logo, nav items, cart etc.
Body => Restaurants List
          Restaurant card
            Restaurant image, name, cuisines, rating etc.
Footer => Copyright info etc.

*/
const Header = () => {
  return (
    <header className="main-header">
      <a href="/" className="logo-a">
        <img
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          alt="logo"
        />
      </a>
      <ul className="main-nav">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};

const Restaurant = () => {
  return (
    <article className="card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"
        alt="restaurant image"
      />
      <h3>KFC</h3>
      <p>American, Snacks, Biryani</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <span style={{ backgroundColor: "lightgreen", padding: " 0 4px" }}>
          * 4.2
        </span>
        <span>41 min</span>
      </div>
      <p>FREE DELIVERY</p>
    </article>
  );
};

const Body = () => {
  return (
    <section>
      <Restaurant />
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ textAlign: "center" }}>
      <h6>FoodVilla : Copyright 2023</h6>
    </footer>
  );
};

const AppComponent = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
