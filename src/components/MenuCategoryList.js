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
          className={
            "font-bold text-gray-700 flex justify-between py-2 " +
            (list?.categories ? "" : " cursor-pointer")
          }
          onClick={toggleList}
        >
          {title} {list?.itemCards ? `(${list?.itemCards?.length})` : ""}
          {list?.itemCards && isMenuOpen ? (
            <span>⌃</span>
          ) : list?.categories ? (
            ""
          ) : (
            <span className="rotate-180">⌃</span>
          )}
        </h4>
        {list?.categories && (
          <section className="nested-category">
            {list?.categories.map((listItem, index) => {
              return <MenuCategoryList key={index} list={listItem} />;
            })}
          </section>
        )}
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
    </>
  );
};

export default MenuCategoryList;
