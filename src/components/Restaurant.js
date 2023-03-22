import { IMG_CDN_URL } from "../config";

const Restaurant = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    aggregatedDiscountInfo,
    promoted,
    costForTwoString,
  } = { ...restaurant };

  // console.log(restaurant);
  return (
    <article className=" w-56 flex flex-col h-full relative">
      {promoted && (
        <span className="absolute left-[-8px] bg-gray-800 text-white text-xs px-4 py-1 font-normal tracking-wider before:w-0 before:h-0 before:border-transparent before:border-t-gray-800 before:border-[6px] before:absolute before:top-[17px] before:left-[2px] before:rotate-[225deg] before:transform-gpu">
          PROMOTED
        </span>
      )}
      <img
        src={IMG_CDN_URL + ",w_508,h_320,c_fill/" + cloudinaryImageId}
        alt={name + " image"}
      />
      <section className="p-2  flex-column">
        <h3 className="font-semibold mb-1 mt-3 leading-none text-gray-700">
          {name}
        </h3>
        <div className="text-xs flex-column">
          <p className=" text-gray-500">{cuisines.join(", ")}</p>
          <div className="flex gap-2 py-1 mt-2 items-center justify-between  ">
            <span className="bg-[#48c479]  px-[.5em] py-[.15em] text-white">
              <span className="">✭</span> {avgRating}
            </span>

            <span className="text-gray-600 text-[.7rem] flex before:content-['●'] before:text-[4px] before:relative before:-left-2">
              {slaString}
            </span>
            <span className="text-gray-600 text-[.7rem] flex before:content-['●'] before:text-[4px] before:relative before:-left-2">
              {costForTwoString}
            </span>
          </div>

          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta && (
            <p className="mt-auto text-primary-brown border-t">
              <span className="text-primary-brown/80 text-base align-items-center relative top-[1px] icon-offer-filled mr-2"></span>
              <span className="font-normal">
                {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
              </span>
            </p>
          )}
        </div>
      </section>
    </article>
  );
};

export default Restaurant;
