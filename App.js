import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";

/*
Header => Logo, nav items, cart etc.
Body => Search Restaurant
        Restaurants List
          Restaurant card
            Restaurant image, name, cuisines, rating etc.
Footer => Copyright info etc.

*/

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
