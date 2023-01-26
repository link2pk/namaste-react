import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_URL } from "../config";

const useRestaurantData = (menuId) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(RESTAURANT_DETAILS_URL + menuId);
    const json = await data.json();
    setRestaurantData(json?.data);
  }

  return restaurantData;
};

export default useRestaurantData;
