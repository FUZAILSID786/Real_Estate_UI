import React, { useContext, useState } from 'react'
import "./SinglePage.css"
import Slider from '../../components/slider/Slider'
import Map from "../../components/map/Map"
import { useLoaderData, useNavigate } from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext"
import apiRequest from "../../lib/apiRequest"

const SinglePage = () => {
  const post = useLoaderData();
  const {currentUser} = useContext(AuthContext);
  const [saved, setSaved] = useState(post.isSaved)

  const navigate = useNavigate();

  const handleSave = async () => {
    setSaved((prev)=> !prev);
    if(!currentUser){
      navigate("/login");
    }
    try {
      
      await apiRequest.post("/users/save",{postId : post.id})
      
    } catch (err) {
      console.log(err);
      setSaved((prev)=> !prev);
    }
  }

  return (
    <div className='singlepage'>
      <div className="details">
        <div className="singlewrapper1">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="singleprice">
                  ${post.price}
                </div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom">
              {post.postDetail.desc}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="singlewrapper2">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilites</span>
                {
                  post.postDetail.utilities === "owner" ? (
                    <p>Owner is responsible</p>
                  ):(
                    <p>Tenant is responsible</p>
                  )
                }
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {
                  post.postDetail.pet === "allowed" ? <p>Pets Allowed</p> : <p>Pets not Allowed</p>
                  
                }
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size} </span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} beds </span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapCont">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button onClick={handleSave} style={{backgroundColor: saved ? "#fece51" : "white",}}>
              <img src="/save.png" alt="" />
              {saved?"Place Saved":"Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
