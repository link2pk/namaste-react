const Shimmer = () => {
  return (
    <>
      <section className="text-center h-[66px]"></section>
      <section className="flex flex-wrap justify-center">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="inline-block shadow m-2 min-h-[273px]">
              <article className=" w-56 flex flex-col h-full">
                <div className="h-[126px] bg-shimmer-bg"></div>
                <h3 className="h-[44px] bg-gray-400"></h3>
                <p></p>
              </article>
            </div>
          ))}
      </section>
    </>
  );
};
export default Shimmer;
