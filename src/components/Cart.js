import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };
  const emptyCart = () => {
    dispatch(clearCart());
  };
  return (
    <ul className="container max-w-xl  mx-auto ">
      <div className="text-center">
        <button className="btn-primary" onClick={() => emptyCart()}>
          clear cart
        </button>
      </div>
      {cartItems.map(({ id, name, price, cloudinaryImageId }) => (
        <li
          key={id}
          className=" border-b py-4 px-4 grid grid-cols-[1fr_130px] gap-3 items-center hover:bg-primary-brown/5"
        >
          <section>
            <h4>{name}</h4>
            <div className="flex items-center gap-3">
              <b>₹ {price / 100}</b>
              <button
                className="border border-primary-brown text-xs px-1 rounded-sm ease-in duration-200 hover:bg-primary-brown hover:text-white"
                onClick={() => removeItemFromCart(id)}
              >
                - Remove
              </button>
            </div>
          </section>
          {cloudinaryImageId ? (
            <img
              className="max-w-[200px] max-h-20"
              src={IMG_CDN_URL + cloudinaryImageId}
              alt={name + " image"}
            />
          ) : (
            <div className="w-[122px] h-20 bg-slate-300 before:content-['No Preview Available'] before:text-xs"></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Cart;
