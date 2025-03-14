import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.css"

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageCont' >
        <img src={item.images} alt="" />
      </Link>
      <div className="textCont"> 
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="cardbottom">
          <div className="feature">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card