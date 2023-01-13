import { useState } from "react";
import { RESTAURANT_CARDS } from "../../config";
import Restaurant from "./Restaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantCards, setRestaurantCards] = useState(RESTAURANT_CARDS);

  return (
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
            const filteredRestaurants = RESTAURANT_CARDS.filter((obj) =>
              obj.data.name.includes(searchText)
            );
            setRestaurantCards(filteredRestaurants);
          }}
        >
          Search
        </button>
      </section>
      <section className="restaurants">
        {restaurantCards.map((obj) => (
          <Restaurant restaurant={obj.data} key={obj.data.id} />
        ))}
      </section>
    </main>
  );
};

export default Body;
