import { useState, useEffect } from "react";
// import { RESTAURANT_DETAILS_URL } from "../config";
import { resMenuData } from "../mock/resmenudata";

const useRestaurantData = (menuId) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    // const data = await fetch(RESTAURANT_DETAILS_URL + menuId);
    // const json = await data?.json();
    const json = resMenuData[menuId];
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantData(json?.data?.cards);
  }

  return restaurantData;
};

export default useRestaurantData;
