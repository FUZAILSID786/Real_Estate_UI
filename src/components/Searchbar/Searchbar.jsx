import React, { useState } from 'react'
import "./Searchbar.css"


const types = ["buy","rent"];

const Searchbar = () => {
  const[query, setQuery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  })

  const switchType = (val)=>{
    setQuery(prev=>({...prev,type:val}));
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
        <input type="text" name='' placeholder='City Location'/>
        <input type="number" name='' placeholder='Min Price'/>
        <input type="number" name='' placeholder='Max Price'/>
        <button>
          <img src="search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar
