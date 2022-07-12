import { Avatar,IconButton } from '@mui/material';
import './App.css';
import React,{ useState , useEffect } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchIcon from '@mui/icons-material/Search';
import ChatUser from './component/Chat.js'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import db from './config';
import { collection, getDocs, addDoc} from "firebase/firestore";
import Sidebar from './component/Sidebar';
// import userEvent from '@testing-library/user-event';
function App() {
  const [rooms, setRooms] = useState([]);

  return (
    <div className="App">
      <div className="InnerCont" style={{zIndex: 2}}>
        {/* left sidebar */}
        <Sidebar rooms = {rooms} setRooms = {setRooms}/>

        {/*chatbox */}
        <div className="chatbox">
          {/* header user */}
          <div className="headerUser" >
            <div className="user">
              <Avatar  src = "https://i.pravatar.cc/150?img=3"/>
              <div className="userchat">
              <div className="chatuser1">
                gaurav padaliya
              </div>
              <div className="chattime">
              12 jul  12:32:32 
              </div>
            </div>
            </div>
            
            <div className="headSetting">
            <IconButton>
             <SearchIcon/>
            </IconButton>
            <IconButton>
              <AttachFileIcon/>
            </IconButton>
            <IconButton>
              <MoreVertRoundedIcon/>
            </IconButton>
            </div>
          </div>
          {/* chat container */}
          <div className="chatcontainer">
            <div className="leftmsg">
              <span className="friendname"> kamal jaira</span>
              <span className="friendmsg">this message was deleted</span>
              <span className="friendtime">12:30</span>
            </div>
            <div className="rightmsg">
            <span className="myname">gaurav padaliya</span>
              <span className="mymsg">hello kamal</span>
              <span className="mytime">12:30</span>
            </div>
          </div>
          {/* input footer */}
          <div className="inpfooter">
            <div className="headSetting">
              <IconButton>
                <AttachFileIcon/>
              </IconButton>
              <IconButton>
                <SentimentSatisfiedAltIcon/>
              </IconButton>
            </div>
            <form action="submit">
              <input type="text" />
              <input type="submit"/>
            </form>
            <div className="voicype">
              <IconButton>
                <KeyboardVoiceIcon/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
