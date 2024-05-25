import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    name: "E-tickets",
    path: "/",
  },
  {
    id: nanoid(),
    name: "My tickets",
    path: "/my-tickets",
  },
  {
    id: nanoid(),
    name: "Help & Support",
    path: "/help&support",
  },
];

const navSlice = createSlice({
  name: "navLink",
  initialState,
});

export default navSlice.reducer;
