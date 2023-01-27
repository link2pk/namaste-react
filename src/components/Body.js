import { useEffect, useState } from "react";
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
      <section className="restaurants-search">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="btn btn-search"
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
      <section className="restaurants">
        {restaurantCards.length === 0 ? (
          <NoRestaurant />
        ) : (
          restaurantCards.map((obj) => (
            <Link to={"/restaurant/" + obj.data.id} key={obj.data.id}>
              <Restaurant restaurant={obj.data} />
            </Link>
          ))
        )}
      </section>
    </>
  );
};

export default Body;
