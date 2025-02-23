import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Searchbar.css"


const types = ["buy","rent"];

const Searchbar = () => {
  const[query, setQuery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:100000000,
  })

  const switchType = (val)=>{
    setQuery(prev=>({...prev,type:val}));
  }
  
  const handleChange = e => {
    setQuery(prev=>({...prev, [e.target.name] : e.target.value}));
  }

  return (
    <div className='Searchbar'>
      <div className="type">
        {types.map((type)=>(
                  <button onClick={()=>switchType(type)} className={query.type === type ? "active" : ""}>
                    {type}
                    </button>
        ))}
      </div>
      <form action="">
        <input className='max-xl:pl-1 pr-1' type="text" name='city' placeholder='City' onChange={handleChange} />
        <input className='max-xl:pl-1 pr-1' type="number" name='minPrice' placeholder='Min Price' onChange={handleChange}/>
        <input className='max-xl:pl-1 pr-1' type="number" name='maxPrice' placeholder='Max Price' onChange={handleChange}/>
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
        <button>
          <img src="search.png" alt="" />
        </button>
        </Link>
      </form>
    </div>
  )
}

export default Searchbar
