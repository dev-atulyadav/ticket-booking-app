import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo");
const initialState = {
  isLoggedIn: userInfo == null ? false : true,
  user: userInfo === null ? null : userInfo,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("userInfo")
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
