const ShimmerRestaurantDetails = () => {
  return (
    <>
      <section className="restaurant-details shimmer-restaurant-details">
        <div className="restaurant-img"></div>
        <section>
          <h2></h2>
          <p></p>
        </section>
      </section>
      <section className="restaurant-menu">
        <ul>
          {Array(10)
            .fill("")
            .map(() => {
              return <li></li>;
            })}
        </ul>
      </section>
    </>
  );
};

export default ShimmerRestaurantDetails;
