import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantDetails from "./src/components/RestaurantDetails";
import Profile from "./src/components/Profile";

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
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:menuId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
