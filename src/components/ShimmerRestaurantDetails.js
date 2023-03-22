const ShimmerRestaurantDetails = () => {
  return (
    <>
      <section className=""></section>
      <section className="py-2">
        <ul>
          {Array(10)
            .fill("")
            .map((e, index) => {
              return (
                <li
                  key={index}
                  className=" border-b py-4 px-4 container max-w-xl mx-auto grid grid-cols-[1fr_130px] gap-3 items-center hover:bg-primary-brown/5"
                >
                  <section>
                    <h4 className="h-[24px] bg-gray-200 w-[80%]"></h4>
                    <div className="h-[24px] bg-gray-300  w-[30%]"></div>
                  </section>
                  <div className="w-[127px] h-[80px] flex items-center justify-center bg-slate-100  before:w-[80px] "></div>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default ShimmerRestaurantDetails;
