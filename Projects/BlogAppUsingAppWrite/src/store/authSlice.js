import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  status: "idle", // idle, loading, loggedIn, loggedOut
};
// Create a slice of the store

const authSlice = createSlice({
  name: "auth",
  // initialState: {
  //   userData: null,
  //   status: false,
  // },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
      state.status = true;
    },
    logout: (state) => {
      state.userData = null;
      state.status = true;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
