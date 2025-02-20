import React, { useContext} from 'react'
import "./Profilepage.css"
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import apiRequest from '../../lib/apiRequest.js'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'

const Profilepage = () => {

  const {updateUser, currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try{

      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    }catch(err){

      console.log(err);
    }
  }

  return (
  <div className='profilepage'>
      <div className="details">
        <div className="wrap">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar: <img src={currentUser.avatar || "/noavatar.jpg"} alt="" /></span>
            <span>Username: <b>{currentUser.username} </b></span>
            <span>E-mail: <b> {currentUser.email} </b></span>
            <button onClick={handleLogout} >Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrap">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default Profilepage
