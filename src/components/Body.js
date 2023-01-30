import { useState } from "react";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import NoRestaurant from "./NoRestaurant";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantCards, setRestaurantCards] = useState([]);
  const allRestaurant = useRestaurants(restaurantCards, setRestaurantCards);

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
      </section>
      <section className="flex flex-wrap justify-center">
        {restaurantCards?.length === 0 ? (
          <NoRestaurant />
        ) : (
          restaurantCards?.map((obj) => (
            <Link
              to={"/restaurant/" + obj.data.id}
              key={obj.data.id}
              className=" inline-block shadow m-2"
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
