import {createSelector, createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      //findIndex is default in JS, it will returns only the 1st instance of that element
      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToAdd.name;
      });

      if (itemPresentKey !== -1) {
        const itemFound = state.cartItems[itemPresentKey];
        itemFound.quantity += 1;
        itemFound.totalPrice += itemFound.item.price;
      } else {
        state.cartItems.push({
          item: itemToAdd,
          quantity: 1,
          totalPrice: itemToAdd.price,
        });
      }
    },

    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToRemove.name;
      });

      if (itemPresentKey !== -1) {
        state.cartItems.splice(itemPresentKey, 1);
      }
    },
    clearCart: state => {
      state.cartItems = [];
    },

    incrementQuantity: (state, action) => {
      const itemToUpdate = action.payload;
      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToUpdate.name;
      });

      const itemToIncrement = state.cartItems[itemPresentKey];

      itemToIncrement.quantity += 1;
      itemToIncrement.totalPrice += itemToIncrement.item.price;
    },

    decrementQuantity: (state, action) => {
      const itemToUpdate = action.payload;
      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToUpdate.name;
      });

      const itemToDecrement = state.cartItems[itemPresentKey];

      if (itemToDecrement.quantity == 1) {
        state.cartItems.splice(itemPresentKey, 1);
      } else {
        itemToDecrement.quantity -= 1;
        itemToDecrement.totalPrice -= itemToDecrement.item.price;
      }
    },
  },
});

// Action creators are generated for each case reducer function

export const cartTotal = createSelector(
  state => state.cart.cartItems,
  cartItems => cartItems.reduce((total, item) => total + item.totalPrice, 0),
);

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
