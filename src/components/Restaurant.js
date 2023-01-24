import { IMG_CDN_URL } from "../../config";

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
    <article className="card">
      <img src={imgurl} alt="restaurant image" />
      <section>
        <h3>{name}</h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          {avgRating === "--" ? null : (
            <span style={{ backgroundColor: "lightgreen", padding: " 0 4px" }}>
              * {avgRating}
            </span>
          )}

          <span>{slaString}</span>
        </div>
        <p>{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</p>
      </section>
    </article>
  );
};

export default Restaurant;
