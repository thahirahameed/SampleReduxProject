import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      //   state = [...state, action.payload];
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCar} = carSlice.actions;

export default carSlice.reducer;
