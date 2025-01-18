import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
      <div className='max-2xl:font-sans h-screen max-w-7xl ml-auto mr-auto pl-5 pr-5 flex flex-col
      max-xl:
      max-lg:
      max-md:'>
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="content flex-1">
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
