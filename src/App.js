import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
// import About from "./components/About";
import Error from "./components/Error";
// import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));
const RestaurantDetails = lazy(() => import("./components/RestaurantDetails"));
/*
Header => Logo, nav items, cart etc.
Body => Search Restaurant
        Restaurants List
          Restaurant card
            Restaurant image, name, cuisines, rating etc.
Footer => Copyright info etc.

*/

const AppComponent = () => {
  const [user, setUser] = useState({
    name: "Username",
    email: "user@testdev.com",
  });
  // const [vegOnly, setVegOnly] = useState(false);
  // console.log(user);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
          // vegOnly: vegOnly,
          // setVegOnly: setVegOnly,
        }}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<div>Loading About Us...</div>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:menuId",
        element: (
          <Suspense fallback={<div>Loading RestaurantDetails...</div>}>
            <RestaurantDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
