import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantData from "../utils/useRestaurantData";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantDetails = () => {
  const { menuId } = useParams();

  const restaurantData = useRestaurantData(menuId);
  const { cloudinaryImageId, name, cuisines, area } = restaurantData;

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };
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
                className=" border-b py-4 px-4 container max-w-xl  mx-auto grid grid-cols-[1fr_130px] gap-3 items-center hover:bg-primary-brown/5"
              >
                <section>
                  <h4>{name}</h4>
                  <div className="flex items-center gap-3">
                    <b>₹ {price / 100}</b>
                    <button
                      className="border border-primary-brown text-xs px-1 rounded-sm ease-in duration-200 hover:bg-primary-brown hover:text-white"
                      onClick={() => addItemToCart(item)}
                    >
                      + Add
                    </button>
                  </div>
                </section>
                {cloudinaryImageId ? (
                  <img
                    className="max-w-[200px] max-h-20"
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
