import React from 'react'
import { MapContainer,TileLayer } from 'react-leaflet'
import "./Map.css"
import "leaflet/dist/leaflet.css"
import Pin from '../pin/Pin'

const Map = ({items}) => {
  return (
    <MapContainer center={items.length ===1 ? [items[0].latitude,items[0].longitude] : [51.505, -0.09]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
        items.map(item=>(
            <Pin item={item} key={item.id} />
        ))
    }
  </MapContainer>
  )
}

export default Map
