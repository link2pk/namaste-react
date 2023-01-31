import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Restaurant = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    aggregatedDiscountInfo,
  } = { ...restaurant };

  const { user } = useContext(UserContext);

  return (
    <article className=" w-56 flex flex-col h-full">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name + " image"} />
      <section className="p-2  flex-column">
        <h3 className="font-semibold mb-1 leading-none ">{name}</h3>
        <div className="text-xs flex-column">
          <p>{cuisines.join(", ")}</p>
          <div className="flex gap-2 py-1">
            {avgRating === "--" ? null : (
              <span className="bg-green-500 rounded-sm px-1 text-white">
                <span className="">✭</span> {avgRating}
              </span>
            )}

            <span>{slaString}</span>
          </div>

          <p className="mt-auto text-primary-brown ">
            <span className="text-primary-brown/70 text-base align-items-center relative top-[1px]">
              ✹
            </span>{" "}
            {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
          </p>
          <div>{user.name}</div>
        </div>
      </section>
    </article>
  );
};

export default Restaurant;
