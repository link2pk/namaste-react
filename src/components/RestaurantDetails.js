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
      <section className="flex  bg-primary-brown text-white">
        <img
          className="max-w-[200px]"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name + " logo"}
        />
        <section className="p-2">
          <h2>{name}</h2>
          <p>{cuisines?.join(", ")}</p>
          <p>{area}</p>
        </section>
      </section>
      <section className="py-2">
        <ul>
          {Object.values(restaurantData?.menu?.items).map((item) => {
            const { name, price, cloudinaryImageId, id } = item;
            return (
              <li
                key={id}
                className="max-w-xs mx-auto flex justify-between py-2"
              >
                <section>
                  <p>{name}</p>
                  <b>₹ {price.toString().slice(0, -2)}</b>
                </section>
                {cloudinaryImageId ? (
                  <img
                    className="max-w-[200px] max-h-12"
                    src={IMG_CDN_URL + cloudinaryImageId}
                    alt={name + " image"}
                  />
                ) : (
                  <div className="w-[77px] h-12 bg-slate-300 before:content-['No Preview Available'] before:text-xs"></div>
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
