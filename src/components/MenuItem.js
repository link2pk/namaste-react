import StarBestseller from "../assets/img/star-bestseller.svg";
import Veg from "../assets/img/veg.svg";
import NonVeg from "../assets/img/non-veg.svg";
import { IMG_CDN_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ info, resInfo }) => {
  const { name, isVeg, isBestseller, price, defaultPrice, imageId } = info;
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addItemToCart = (info) => {
    // console.log(cartItems.length);
    dispatch(addItem({ ...info, resId: resInfo?.id }));
  };
  // console.log(info);
  return (
    <>
      <li className="grid grid-cols-[1fr_118px] gap-1  border-b pt-5">
        <section>
          <div className="flex items-center gap-1">
            {isVeg ? (
              <img src={Veg} alt="veg dish" className="w-[16px]" />
            ) : (
              <img src={NonVeg} alt="Non-veg dish" className="w-[16px]" />
            )}
            {isBestseller && (
              <>
                <span className="ml-1">
                  <img
                    src={StarBestseller}
                    alt="star icon"
                    className="w-[14px]"
                  />
                </span>
                <span className="text-xs font-bold text-[#ee9c00] relative top-[1px]">
                  Bestseller
                </span>
              </>
            )}
          </div>
          <h6 className="font-normal text-gray-800 mt-1">{name}</h6>
          <p className="text-sm font-normal text-gray-700">
            ₹ {price ? price / 100 : defaultPrice / 100}
          </p>
        </section>
        <div className="text-center ">
          <picture className="w-[118px] h-[96px] block">
            {imageId && (
              <img
                src={IMG_CDN_URL + ",w_208,h_208,c_fit/" + imageId}
                alt={name}
                className=" w-full h-full object-cover rounded-lg"
              />
            )}
          </picture>

          <button
            className="text-[#60b246] text-xs font-bold  w-[100px] py-2 relative top-[-26px] bg-white border border-gray-300 rounded shadow"
            onClick={() => {
              addItemToCart(info);
            }}
          >
            ADD
          </button>
        </div>
      </li>
    </>
  );
};
export default MenuItem;
