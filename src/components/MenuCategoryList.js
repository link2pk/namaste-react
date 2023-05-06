import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategoryList = ({ list, resInfo }) => {
  const { title } = list;
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleList = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section>
        <h4
          className="font-bold cursor-pointer text-gray-700 flex justify-between py-2"
          onClick={toggleList}
        >
          {title} {list?.itemCards ? `(${list?.itemCards?.length})` : ""}
          {list?.itemCards && isMenuOpen ? (
            <span>⌃</span>
          ) : (
            <span className="rotate-180">⌃</span>
          )}
        </h4>
        {list?.itemCards && isMenuOpen && (
          <ul>
            {list?.itemCards.map((itemCard) => {
              const info = itemCard?.card?.info;
              return <MenuItem info={info} key={info?.id} resInfo={resInfo} />;
            })}
          </ul>
        )}
        {list?.itemCards && (
          <hr className="border-t-0 border-b-[16px] border-gray-100" />
        )}
      </section>

      {list?.categories && (
        <section className="nested-category">
          {list?.categories.map((listItem, index) => {
            return <MenuCategoryList key={index} list={listItem} />;
          })}
        </section>
      )}
    </>
  );
};

export default MenuCategoryList;
