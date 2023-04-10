import Star from "../assets/img/star.svg";

const RestaurantInfo = ({
  name,
  cuisines,
  areaName,
  avgRating,
  totalRatingsString,
  feeDetails,
}) => {
  return (
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
          <span className="text-green text-[14px] font-bold">{avgRating}</span>
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
  );
};

export default RestaurantInfo;
