const Shimmer = () => {
  return (
    <>
      <section className="text-center h-[66px]"></section>
      <section className="flex flex-wrap justify-center">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="inline-block shadow m-2 min-h-[273px]">
              <article className=" w-56 flex flex-col h-full animate-pulse">
                <div className="min-h-[141px] bg-shimmer-bg"></div>
                <section class="p-2 flex-column">
                  <h3 class="font-semibold mb-2 mt-3 leading-none bg-gray-300 h-8 w-[80%] "></h3>
                  <div class="text-xs flex-column">
                    <p class=" bg-gray-100 h-4 "></p>
                    <p class=" bg-gray-100 h-4 mb-3 w-1/2"></p>
                    <p class=" bg-gray-100 h-6"></p>
                  </div>
                </section>
              </article>
            </div>
          ))}
      </section>
    </>
  );
};
export default Shimmer;
