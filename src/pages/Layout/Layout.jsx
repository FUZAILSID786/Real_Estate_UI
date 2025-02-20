import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
  return (
    <>
      <div className='max-2xl:font-sans overflow-hidden h-screen max-w-7xl ml-auto mr-auto pl-5 pr-5 flex flex-col
      max-xl:
      max-lg:
      max-md:overflow-y-scroll pb-60'>
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="content flex-1">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

const RequireAuth = () => {

  const {currentUser} = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <>
      <div className='max-2xl:font-sans overflow-hidden h-screen max-w-7xl ml-auto mr-auto pl-5 pr-5 flex flex-col
      max-xl:
      max-lg:
      max-md:overflow-y-scroll pb-60'>
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="content flex-1">
          <Outlet/>
        </div>
      </div>
    </>
  )
}
export {Layout, RequireAuth};
