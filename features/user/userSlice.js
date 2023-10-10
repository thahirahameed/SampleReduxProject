import {createSlice} from '@reduxjs/toolkit';

const initialState = {email: ''};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload;
    },
    logoutUser: (state, action) => {
      state.email = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {loginUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;
