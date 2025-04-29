import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const movieSeatSlice = createSlice({
  name: "movieSeat",
  initialState,
  reducers: {
    setMovieSeat: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setMovieSeat } = movieSeatSlice.actions;
export default movieSeatSlice.reducer;
