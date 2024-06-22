import { createSlice } from "@reduxjs/toolkit";

const userEmail = localStorage.getItem("userEmail");
const initialState = {
  isLoggedIn: userEmail == null ? false : true,
  user: userEmail === null ? null : userEmail,
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
      localStorage.removeItem("userEmail")
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
