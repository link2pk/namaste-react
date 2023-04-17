import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items[action.payload.id];
      const qty =
        item && item.hasOwnProperty("qty")
          ? state.items[action.payload.id]?.qty + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, qty };
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload];

      if (item.qty > 1) {
        item.qty--;
      } else {
        delete state.items[action.payload];
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
