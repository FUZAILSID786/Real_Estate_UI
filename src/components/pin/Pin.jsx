import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import "./Pin.css"

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
          <Popup>
            <div className="popCont">
                <img src={item.img} alt="" />
                <div className="txtCont">
                    <Link to={`/${item.id}`} >{item.title}</Link>
                    <span className="bed">{item.bedroom} bedroom</span>
                    <b>{item.price}</b>
                </div>
            </div>
          </Popup>
        </Marker>
  )
}

export default Pin
