const Shimmer = () => {
  return (
    <section className="shimmer-cards">
      <section className="restaurants-search"></section>
      <section className="restaurants">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <article className="card" key={index}>
              <div className="shimmer-img"></div>
              <h3></h3>
              <p></p>
            </article>
          ))}
      </section>
    </section>
  );
};
export default Shimmer;
