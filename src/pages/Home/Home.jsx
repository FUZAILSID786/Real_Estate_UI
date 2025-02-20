import React, { useContext } from 'react'
import "./Home.css"
import Searchbar from '../../components/Searchbar/Searchbar'
import { AuthContext } from '../../context/AuthContext';

const Home = () => {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      <div className="homePage flex h-full">
        <div className="textContainer">
          <div className="wrapper flex flex-col justify-center gap-12 h-full p-">
          <h1 className='title font-bold text-5xl'>Find Real Estate & Get Your Dream Place.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, tempora placeat nostrum cupiditate laboriosam sunt veniam id esse veritatis quos animi eos natus perspiciatis ipsam quod porro! Ea, alias nemo?</p>
          <Searchbar/>
          <div className="boxes flex justify-between">
            <div className="box">
              <h1 className='text-4xl font-bold'>16+</h1>
              <h2 className='text-xl font-light'>Years of Experience</h2>
            </div>
            <div className="box">
              <h1 className='text-4xl font-bold'>200</h1>
              <h2 className='text-xl font-light'>Awards Gained</h2>
            </div>
            <div className="box">
              <h1 className='text-4xl font-bold'>1200+</h1>
              <h2 className='text-xl font-light'>Property Ready</h2>
            </div>
          </div>
          </div>
        </div>
        <div className="imgContainer bg-orange-100">
          <img className='' src="bg.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
