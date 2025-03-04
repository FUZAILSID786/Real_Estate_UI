import React from 'react'
import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './pages/ListPage/ListPage';
import {Layout , RequireAuth} from './pages/Layout/Layout';
import SinglePage from './pages/SinglePage/SinglePage';
import Profilepage from './pages/Profilepage/Profilepage';
import ProfileUpdatePage from './pages/ProfileUpdatePage/ProfileUpdatePage';
import Register from './pages/Register/Register'
import Login from './pages/Login/Login';
import NewPostPage from './pages/NewPostPage/NewPostPage';
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders';

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
          element:<ListPage/>,
          loader:listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader:singlePageLoader,
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
    },
    {
      path:"/",
      element:<RequireAuth />,
      children:[
        {
          path:"/profile",
          element:<Profilepage/>,
          loader:profilePageLoader
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>,
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
