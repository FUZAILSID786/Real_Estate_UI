import React from 'react'
import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './pages/ListPage/ListPage';
import Layout from './pages/Layout/Layout';
import SinglePage from './pages/SinglePage/SinglePage';
import Profilepage from './pages/Profilepage/Profilepage';
import Register from './pages/Register/Register'
import Login from './pages/Login/Login';

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
        },
        {
          path:"/profile",
          element:<Profilepage/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
