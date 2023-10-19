import carSlice from './cars/carSlice';
import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import itemSlice from './items/itemsSlice';
import userSlice from './user/userSlice';

export default {
  counter: counterSlice,
  car: carSlice,
  cart: cartSlice,
  item: itemSlice,
  user: userSlice,
};
