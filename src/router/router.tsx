import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/pages/Blog';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/pages/Home';
import ErrorPage from '../components/pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);
