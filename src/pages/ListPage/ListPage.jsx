import React from 'react'
import "./ListPage.css"
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map'
import { useLoaderData } from 'react-router-dom'

const ListPage = () => {

  const posts = useLoaderData();

  return (
    <div className='ListPage'>
      <div className="listContainer">
        <div className="listwrapper">
          <Filter/>
          {posts.map(item=>(
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  )
}

export default ListPage
