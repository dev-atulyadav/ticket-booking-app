import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import MovieDetails from "../components/Details/MovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <MovieDetails />,
      },
    ],
  },
]);
