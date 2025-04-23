import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo");
const initialState = {
  isLoggedIn: userInfo == null ? false : true,
  user: userInfo === null ? null : userInfo,
  tickets: [],
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
    addTicket: (state, action) => {
      state.tickets.push(action.payload);
    },
    removeTicket: (state, action) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.movieId !== action.payload
      );
    },
  },
});

export const { login, logout, addTicket, removeTicket } = userSlice.actions;
export default userSlice.reducer;
