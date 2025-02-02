import React from 'react'
import "./Profilepage.css"
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'

const Profilepage = () => {
  return (
    <div className='profilepage'>
      <div className="details">
        <div className="wrap">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
            <span>Username: <b>John Doe</b></span>
            <span>E-mail: <b>john@gmail.com</b></span>
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
