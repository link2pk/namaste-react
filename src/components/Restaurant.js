import { IMG_CDN_URL } from "../config";

const Restaurant = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    aggregatedDiscountInfo,
  } = { ...restaurant };
  const imgurl = IMG_CDN_URL + `${cloudinaryImageId}`;
  return (
    <article className=" w-56 flex flex-col h-full">
      <img src={imgurl} alt="restaurant image" />
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
        </div>
      </section>
    </article>
  );
};

export default Restaurant;
