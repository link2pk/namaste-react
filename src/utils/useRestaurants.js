import { useState, useEffect } from "react";

const useRestaurants = (restaurantCards, setRestaurantCards) => {
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
    const setData = json?.data?.cards?.filter(
      (item) => item.cardType === "seeAllRestaurants"
    )[0]?.data?.data?.cards;
    // const setData = json?.data?.cards[2]?.data?.data?.cards;
    // console.log(json);
    // console.log(setData);
    setRestaurantCards(setData);
    setAllRestaurant(setData);
  }
  return allRestaurant;
};

export default useRestaurants;
