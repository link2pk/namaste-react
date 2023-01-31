import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import NoRestaurant from "./NoRestaurant";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantCards, setRestaurantCards] = useState([]);
  const allRestaurant = useRestaurants(restaurantCards, setRestaurantCards);

  const { user, setUser } = useContext(UserContext);

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <section className="text-center">
        <input
          type="text"
          className="rounded-l-sm py-1 border-primary-brown "
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="text-white  bg-primary-brown border border-primary-brown  px-2  py-1 rounded-r-sm  "
          onClick={() => {
            const filteredRestaurants = allRestaurant.filter((obj) =>
              obj?.data?.name
                ?.toLowerCase()
                ?.includes(searchText?.toLowerCase())
            );
            setRestaurantCards(filteredRestaurants);
          }}
        >
          Search
        </button>
        <span className="px-2"> Set user</span>
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
      </section>
      <section className="flex flex-wrap justify-center">
        {restaurantCards?.length === 0 ? (
          <NoRestaurant />
        ) : (
          restaurantCards?.map((obj) => (
            <Link
              to={"/restaurant/" + obj.data.id}
              key={obj.data.id}
              className=" inline-block shadow m-2 hover:shadow-lg"
            >
              <Restaurant restaurant={obj.data} />
            </Link>
          ))
        )}
      </section>
    </>
  );
};

export default Body;
