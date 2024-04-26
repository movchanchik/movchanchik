import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Blog from "../components/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
