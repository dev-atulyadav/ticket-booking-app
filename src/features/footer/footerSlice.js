import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    name: "Home",
    path: "/",
  },
  {
    id: nanoid(),
    name: "About Us",
    path: "/about-us",
  },
  {
    id: nanoid(),
    name: "Contact",
    path: "/contact",
  },
  {
    id: nanoid(),
    name: "FAQs",
    path: "/faqs",
  },
];

const footerSlice = createSlice({
  name: "footerLink",
  initialState,
});

export default footerSlice.reducer;
