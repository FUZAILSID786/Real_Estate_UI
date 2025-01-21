import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

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

export default Layout
