import {createSlice} from '@reduxjs/toolkit';
import {PersistanceHelper} from '../../helpers';

const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // loginUser: (state, action) => {
    //   state.email = action.payload;
    // },
    // logoutUser: (state, action) => {
    //   state.email = '';
    // },
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
      state.failure = true;
      state.errorMessage = action.errorMessage;
    },
    logout: state => {
      state.data = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice.reducer;
