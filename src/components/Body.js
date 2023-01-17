import { useEffect, useState } from "react";
import NoRestaurant from "./NoRestaurant";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantCards, setRestaurantCards] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    //fetch data here
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.447326834373634&lng=76.9707901775837&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const setData = json?.data?.cards[2]?.data?.data?.cards;
    // console.log(setData);
    setRestaurantCards(setData);
    setAllRestaurant(setData);
  }

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <main>
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
            <Restaurant restaurant={obj.data} key={obj.data.id} />
          ))
        )}
      </section>
    </main>
  );
};

export default Body;
