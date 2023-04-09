import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Star from "../assets/img/star.svg";
import StarBestseller from "../assets/img/star-bestseller.svg";
import Veg from "../assets/img/veg.svg";
import NonVeg from "../assets/img/non-veg.svg";

import { useState } from "react";
import { IMG_CDN_URL } from "../config";

const RestaurantDetails = () => {
  const { menuId } = useParams();

  const restaurantData = useRestaurantData(menuId);
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    feeDetails,
  } = restaurantData[0]?.card?.card?.info || {};
  const menu = restaurantData
    ?.find((obj) => obj.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (obj) => obj.card.card.itemCards || obj.card.card.categories
    );

  // console.log(restaurantData);

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const ItemCard = ({ item }) => {
    const { name, isVeg, isBestseller, price, defaultPrice, imageId } =
      item?.info;
    return (
      <>
        <li className="grid grid-cols-[1fr_118px] gap-1  border-b pt-5">
          <section>
            <div className="flex items-center gap-1">
              {isVeg ? (
                <img src={Veg} alt="veg dish" className="w-[16px]" />
              ) : (
                <img src={NonVeg} alt="Non-veg dish" className="w-[16px]" />
              )}
              {isBestseller && (
                <>
                  <span className="ml-1">
                    <img
                      src={StarBestseller}
                      alt="star icon"
                      className="w-[14px]"
                    />
                  </span>
                  <span className="text-xs font-bold text-[#ee9c00] relative top-[1px]">
                    Bestseller
                  </span>
                </>
              )}
            </div>
            <h6 className="font-normal text-gray-800 mt-1">{name}</h6>
            <p className="text-sm font-normal text-gray-700">
              ₹ {price ? price / 100 : defaultPrice / 100}
            </p>
          </section>
          <div className="text-center ">
            <picture className="w-[118px] h-[96px] block">
              {imageId && (
                <img
                  src={IMG_CDN_URL + ",w_208,h_208,c_fit/" + imageId}
                  alt={name}
                  className=" w-full h-full object-cover rounded-lg"
                />
              )}
            </picture>

            <button className="text-[#60b246] text-xs font-bold  w-[100px] py-2 relative top-[-26px] bg-white border border-gray-300 rounded shadow">
              ADD
            </button>
          </div>
        </li>
      </>
    );
  };

  const CategoryList = ({ list }) => {
    const { title } = list;
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleList = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <>
        <section>
          <h4
            className="font-bold cursor-pointer text-gray-700 flex justify-between py-2"
            onClick={toggleList}
          >
            {title} {list?.itemCards ? `(${list?.itemCards?.length})` : ""}
            {list?.itemCards && <span>⌃</span>}
          </h4>
          {list?.itemCards && isMenuOpen && (
            <ul>
              {list?.itemCards.map((itemCard) => (
                <ItemCard
                  item={itemCard?.card}
                  key={itemCard?.card?.info?.id}
                />
              ))}
            </ul>
          )}
          {list?.itemCards && (
            <hr className="border-t-0 border-b-[16px] border-gray-100" />
          )}
        </section>

        {list?.categories && (
          <section className="nested-category">
            {list?.categories.map((listItem, index) => {
              return (
                <section>
                  <CategoryList list={listItem} key={index} />{" "}
                </section>
              );
            })}
          </section>
        )}
      </>
    );
  };

  return restaurantData?.length === 0 ? (
    <ShimmerRestaurantDetails />
  ) : (
    <>
      <div className="container max-w-xl  mx-auto">
        <section className="border-b py-4   grid grid-cols-[1fr_80px] gap-3 items-center ">
          <section className="">
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-xs text-gray-500">{cuisines?.join(", ")}</p>
            <p className="text-xs text-gray-500">{areaName}</p>
          </section>
          <section>
            <div className="flex gap-1">
              <span>
                <img src={Star} alt="star icon" className="w-[16px]" />
              </span>
              <span className="text-green text-[14px] font-bold">
                {avgRating}
              </span>
            </div>

            <p className="text-xs text-gray-500">{totalRatingsString}</p>
          </section>
          <p className="col-span-full text-[.8rem] text-gray-500 flex gap-1">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info"
              className="w-[18px] h-[18px]"
              alt="icon"
            />
            {feeDetails?.message}
          </p>
        </section>
        <section className="py-2">
          {menu?.map((obj, index) => {
            const list = obj?.card?.card;
            return <CategoryList key={index} list={list} />;
          })}
        </section>
      </div>
    </>
  );
};

export default RestaurantDetails;
