import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
