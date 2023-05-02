import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(Object.values(cartItems));
  const dispatch = useDispatch();
  const removeItemFromCart = (cartItem) => {
    dispatch(removeItem(cartItem));
  };
  const emptyCart = () => {
    dispatch(clearCart());
  };
  const addQty = (cartItem) => {
    dispatch(addItem(cartItem));
  };

  return (
    <ul className="container max-w-xl  mx-auto ">
      <div className="text-center my-4">
        <button className="btn-primary" onClick={() => emptyCart()}>
          clear cart
        </button>
      </div>
      {Object.values(cartItems).map((cartItem) => {
        const { id, name, price, defaultPrice, imageId, quantity } = cartItem;
        // console.log(cartItem);
        return (
          <li
            key={id}
            className=" border-b py-4 px-4 grid grid-cols-[1fr_130px] gap-3 items-center hover:bg-primary-brown/5"
          >
            <section>
              <h4>{name}</h4>
              <div className="flex items-center gap-3">
                <b>
                  ₹
                  {price
                    ? (price * quantity) / 100
                    : (defaultPrice * quantity) / 100}
                </b>
                <span className="border border-gray-200">
                  <button
                    className=" px-2  "
                    onClick={() => removeItemFromCart(cartItem)}
                  >
                    -
                  </button>
                  <span className="text-xs ">{quantity}</span>
                  <button
                    className="px-2"
                    onClick={() => {
                      addQty(cartItem);
                    }}
                  >
                    +
                  </button>
                </span>
              </div>
            </section>
            {imageId ? (
              <img
                className="max-w-[200px] max-h-20"
                src={IMG_CDN_URL + ",w_208,h_208,c_fit/" + imageId}
                alt={name + " image"}
              />
            ) : (
              <div className="w-[122px] h-20 bg-slate-300 before:content-['No Preview Available'] before:text-xs"></div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
