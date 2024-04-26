import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ]
  },

]);
