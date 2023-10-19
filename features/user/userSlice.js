import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.failure = false;
      state.errorMessage = '';
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.errorMessage;
      state.failure = true;
    },
    logout: state => {
      state.data = {};
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
