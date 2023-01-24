import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";

const RestaurantDetails = () => {
  const { menuId } = useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const { cloudinaryImageId, name, cuisines, area } = restaurantData;

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.447326834373634&lng=76.9707901775837&menuId=" +
        menuId
    );
    const json = await data.json();
    setRestaurantData(json?.data);
  }

  return restaurantData?.length === 0 ? (
    <ShimmerRestaurantDetails />
  ) : (
    <>
      <section className="restaurant-details">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name + " logo"}
        />
        <section>
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{area}</p>
        </section>
      </section>
      <section className="restaurant-menu">
        <ul>
          {Object.values(restaurantData?.menu?.items).map((item) => {
            const { name, price, cloudinaryImageId } = item;
            return (
              <li>
                <section>
                  <p>{name}</p>
                  <b>₹ {price.toString().slice(0, -2)}</b>
                </section>
                {cloudinaryImageId ? (
                  <img
                    className="item-img"
                    src={IMG_CDN_URL + cloudinaryImageId}
                    alt={name + " image"}
                  />
                ) : (
                  <div className="item-img-placeholder"></div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default RestaurantDetails;
