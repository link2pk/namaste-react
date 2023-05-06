import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";

import RestaurantInfo from "./RestaurantInfo";
import MenuCategoryList from "./MenuCategoryList";

const RestaurantDetails = () => {
  const { menuId } = useParams();
  const restaurantData = useRestaurantData(menuId);
  const resInfo = restaurantData[0]?.card?.card?.info || {};
  const menu = restaurantData
    ?.find((obj) => obj.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (obj) => obj.card.card.itemCards || obj.card.card.categories
    );

  return restaurantData?.length === 0 ? (
    <ShimmerRestaurantDetails />
  ) : (
    <>
      <div className="container max-w-xl  mx-auto">
        <RestaurantInfo {...resInfo} />
        {resInfo?.veg ? "PURE VEG" : ""}
        <section className="py-2">
          {menu?.map((obj, index) => {
            const list = obj?.card?.card;

            return (
              <MenuCategoryList key={index} list={list} resInfo={resInfo} />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default RestaurantDetails;
