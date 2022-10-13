import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      /*     if(state.products.some(pro => pro.id === action.payload.id)){
                return { products: state.products.map(product => product.id === action.payload.id ? { ...product, amount: product.amount + 1  } : product) }
            } */
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.products[itemIndex].amount += 1;
      } else {
        const tempProduct = { ...action.payload, amount: 1 };
        state.products.push(tempProduct);
      }

      /* return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      }; */
    },
    clearCart: (state) => {
      return { products: [] };
    },
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
