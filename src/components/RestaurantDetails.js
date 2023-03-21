import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Star from "../assets/img/star.svg";

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

  console.log(menu);

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const ItemCard = ({ item }) => {
    const { name } = item?.info;
    return (
      <>
        <li>{name}</li>
      </>
    );
  };

  const CategoryList = ({ list }) => {
    const { title } = list;
    return (
      <>
        <h4 className="font-bold">
          {title} {list?.itemCards ? "(" + list?.itemCards?.length + ")" : ""}
        </h4>
        {list?.itemCards && (
          <ul>
            {list?.itemCards.map((itemCard) => (
              <ItemCard item={itemCard?.card} key={itemCard?.card?.info?.id} />
            ))}
          </ul>
        )}
        {list?.categories &&
          list?.categories.map((listItem, index) => {
            return <CategoryList list={listItem} key={index} />;
          })}
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
            <div className=" ">
              <div className="flex gap-1">
                <span>
                  <img src={Star} alt="star icon" className="w-[16px]" />
                </span>
                <span className="text-green text-[14px] font-bold">
                  {avgRating}
                </span>
              </div>

              <p className="text-xs text-gray-500">{totalRatingsString}</p>
            </div>
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
        {/* <div>{resInfo?.veg === true && "PURE VEG"}</div> */}
        <section className="py-2">
          {menu?.map((obj, index) => {
            const list = obj?.card?.card;
            return <CategoryList key={index} list={list} />;
          })}
          {/* {Object.values(restaurantData[2]?.menu?.items).map((item) => {
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
                  <div className="w-[127px] h-[80px] flex items-center justify-center bg-slate-100  before:text-xs before:content-['No_Preview_Available'] before:w-[80px] before:text-center before:text-gray-500"></div>
                )}
              </li>
            );
          })} */}
        </section>
      </div>
    </>
  );
};

export default RestaurantDetails;
