import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import MovieDetails from "../components/Details/MovieDetails";
import Signup from "../components/Forms/Signup";
import Login from "../components/Forms/Login";
import SearchBox from "../components/Header/SearchBox";
import MyTickets from "../components/Tickets/MyTickets";
import UserProfile from "../components/Header/User/UserProfile";
import ViewSeats from "../components/ViewSeats/ViewSeats";
import HelpSupport from "../components/Help&Support/HelpSupport";
import ErrorPage from "../components/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/details/:moveName/:id",
        element: <MovieDetails />,
      },
      {
        path: "/search",
        element: <SearchBox />,
      },
      {
        path: "/my-tickets",
        element: <MyTickets />,
      },
      {
        path: "/my-profile",
        element: <UserProfile />,
      },
      {
        path: "/view-seats/:movieName/:id",
        element: <ViewSeats />,
      },
      {
        path: "/help&support",
        element: <HelpSupport />,
      },
    ],
  },
]);
