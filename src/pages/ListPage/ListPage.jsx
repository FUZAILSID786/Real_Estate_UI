import React from 'react'
import "./ListPage.css"
import { listData } from '../../lib/dummydata'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map'

const ListPage = () => {

  const data = listData

  return (
    <div className='ListPage'>
      <div className="listContainer">
        <div className="listwrapper">
          <Filter/>
          {data.map(item=>(
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  )
}

export default ListPage
