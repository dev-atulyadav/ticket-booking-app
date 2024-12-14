import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    results:[]
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setResult } = resultSlice.actions;
export default resultSlice.reducer;
