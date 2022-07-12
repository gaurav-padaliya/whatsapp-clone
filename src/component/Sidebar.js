import { Avatar,IconButton } from '@mui/material';
import '../App.css';
import React,{ useState , useEffect } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchIcon from '@mui/icons-material/Search';
import ChatUser from './Chat.js'
import { collection, getDocs, addDoc} from "firebase/firestore";
import db from '../config';

const Sidebar = ({rooms,setRooms}) => {



  const createUser = () => {
      const r1 = prompt("enter the room name");
      if(r1){
        const ref = collection(db,"rooms");
        addDoc(ref , {name:r1});
      //   setRooms([...rooms , r1]);
      }
  }


var abc;
useEffect(() => {
  const ref = collection(db,"rooms")
  getDocs(ref).then(snapshot=>{
    abc = snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data() 
    }));
    // setRooms(abc);
    // console.log(rooms)
  })
}, [])
// console.log(rooms);


  return (
    <div className="sidebar">
    {/* header user */}
    <div className="headerUser">
      <div className="avatar">
        <Avatar src = "https://i.pravatar.cc/150?img=3"/>
      </div>
      <div className="headSetting">
      <IconButton>
        <MessageIcon/>
      </IconButton>
      <IconButton>
        <MoreVertRoundedIcon/>
      </IconButton>
      </div>
    </div>
    {/* searchbar */
    console.log(rooms)
    }
    <div className="searchbar">
      <div>
        <SearchIcon/>
        <input type="text" placeholder='search or start new chat'/>
      </div>
    </div>
    {/* add new chat */}
    <div className="newChat" onClick={ createUser }>
      <span>Add New Chat</span> 
    </div>
    {/* chat User */}
    <div className="chatusers">
    {
      rooms.map(coll =>(
      <ChatUser Rname = {coll.data} key = {coll.id} id = {coll.id} />
      ))
    }
    </div>
  </div>
  )
}

export default Sidebar;