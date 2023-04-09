import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../config";
import { resData } from "../mock/resdata";

const useRestaurants = (restaurantCards, setRestaurantCards) => {
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    //fetch data here
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    // const data = await fetch(RESTAURANTS_URL);
    // const json = await data.json();
    const json = resData;
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
