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
      <section className="p-2 flex-column ">
        <h3 className="font-semibold mb-1">{name}</h3>
        <div className="flex gap-2 ">
          {avgRating === "--" ? null : (
            <span className="bg-green-400 rounded-sm px-2">* {avgRating}</span>
          )}

          <span>{slaString}</span>
        </div>
        <p>{cuisines.join(", ")}</p>

        <p className="mt-auto">
          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </p>
      </section>
    </article>
  );
};

export default Restaurant;
