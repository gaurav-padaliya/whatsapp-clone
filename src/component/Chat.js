import React , {useState,useEffect} from 'react'
import './css/Chat.css'
import { Avatar } from '@mui/material';


const Chat = ({Rname , id}) => {
const [seed, setSeed] = useState([]);

useEffect(() => {
  const ran = Math.floor(Math.random()*70);
  setSeed(ran);
}, [seed]);



  return (
    <div className="chatuser">
      <div className="avatar">
        {/* <Avatar src = {`https://avatars.dicebear.com/api/male/${ran}.svg`}/> */}
        <Avatar src = {`https://i.pravatar.cc/150?img=${seed}`}/>
        
      </div>
      <div className="message">
        <div className="username">{Rname.name}</div>
        <div className="lastmessage">hello</div>
      </div>
    </div>
  )
}

export default Chat