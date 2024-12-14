import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/nav/navSlice";
import footerReducer from "../features/footer/footerSlice";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import resultReducer from "../features/searchResult/resultSlice";

export const store = configureStore({
  reducer: {
    navLinks: navReducer,
    footerLinks: footerReducer,
    user: userReducer,
    movie: movieReducer,
    result: resultReducer
  },
});
