import React, { useContext, useState } from 'react'
import "./Chat.css"
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

const Chat = ({chats}) => {
    const [chat,setChat] = useState(null);
    const {currentUser} = useContext(AuthContext);

    const handleOpenChat = async (id,receiver) => {
        try {
            const res = await apiRequest("/chats/"+id)
            setChat({...res.data, receiver})
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        {
        chats.map((c)=>(
        <div className="message" key={c.id} 
        style={{
            backgroundColor:c.seenBy.includes(currentUser.id) ? "white" : "#fecd514e"
        }}
        onClick={()=>handleOpenChat(c.id,c.receiver)}
        >
            <img src={c.receiver.avatar || "/noavatar.jpg"} alt="" />
            <span>{c.receiver.username}</span>
            <p>
               {c.lastMessage}
            </p>
        </div>
            ))
}
        
    </div>
      {chat && (<div className="chatBox">
        <div className="chattop">
            <div className="user">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                John Doe
            </div>
            <span className='X' onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="chatcenter">
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet</p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="chatbottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
      </div>)}
    </div>
  )
}

export default Chat
