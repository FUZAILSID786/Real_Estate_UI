import React from 'react'
import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './pages/ListPage/ListPage';
import Layout from './pages/Layout/Layout';
import SinglePage from './pages/SinglePage/SinglePage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
