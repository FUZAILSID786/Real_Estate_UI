import React, { useState } from 'react'
import "./Slider.css"

const Slider = ({images}) => {
    const[imageIndex,setImageIndex] = useState(null);

    const changeSlide = (direction)=>{
        if(direction==="left"){
            if(imageIndex===0){
                setImageIndex(images.length-1)
            }else{
                setImageIndex(imageIndex-1)
            }
        }else{
            if(imageIndex===images.length-1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex+1)
            }
        }
    }

  return (
    <div className='slider'>
        {imageIndex !== null && (<div className="fullSlider">
            <div className="arrow">
                <img src="/arrow.png" alt="" onClick={()=>changeSlide("left")} />
            </div>
            <div className="imgCont">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow">
                <img src="/arrow.png" className='rightArrow' alt="" onClick={()=>changeSlide("right")} />
            </div>
            <div className="close" onClick={()=>setImageIndex(null)} >X</div>
        </div>)}
      <div className="bigimage">
        <img src={images[0]} alt="" onClick={()=>setImageIndex(0)} />
      </div>
      <div className="smallimages">
        {images.slice(1).map((image,index)=>(
            <img src={image} alt="" key={index} onClick={()=>setImageIndex(index+1)} />
        ))}
      </div>
    </div>
  )
}

export default Slider
