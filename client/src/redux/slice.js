import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cabinetData: [],
};

export const cabinetSlice = createSlice({
  name: "cabinetSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cabinetData.find(function (item) {
        return item.id === action.payload.id;
      });
      if (item) {
        item.quantity = item.quantity ? item.quantity + 1 : 1;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.cabinetData.push(newItem);
      }
    },

    deleteItem: (state, action) => {
      state.cabinetData = state.cabinetData.filter(function (item) {
        return item.id !== action.payload;
      });
    },

    resetCart: (state) => {
      state.cabinetData = [];
    },

    incrementQuantity: (state, action) => {
      const item = state.cabinetData.find(function (item) {
        return item.id === action.payload;
      });
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cabinetData.find(function (item) {
        return item.id === action.payload;
      });
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = cabinetSlice.actions;

export default cabinetSlice.reducer;
