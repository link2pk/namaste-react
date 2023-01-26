import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantData from "../utils/useRestaurantData";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";

const RestaurantDetails = () => {
  const { menuId } = useParams();

  const restaurantData = useRestaurantData(menuId);
  const { cloudinaryImageId, name, cuisines, area } = restaurantData;

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
          <p>{cuisines?.join(", ")}</p>
          <p>{area}</p>
        </section>
      </section>
      <section className="restaurant-menu">
        <ul>
          {Object.values(restaurantData?.menu?.items).map((item) => {
            const { name, price, cloudinaryImageId, id } = item;
            return (
              <li key={id}>
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
