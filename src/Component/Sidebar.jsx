import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const SideBar=({children})=>{
  const [isOpen,setIsopen]=useState(false)
  const toggle=()=>setIsopen(!isOpen);
  const menuitems=[
    {
      path:"/",
      name:"Home",
      icon:<FaHome/>
    },
   
    {
      path:"/assests",
      name:"Assests",
      icon:<FiCodepen />
    },
    {
      path:"/history",
      name:"History",
      icon:<MdOutlineHistory />
    },
    {
      path:"/wallet",
      name:"Wallet",
      icon:<IoWallet />
    }
  ]
  return(
    <div >
    <div style={{backgroundColor:"#1f1f1c"}} className="root " >
      <div style={{width:isOpen ? "250px":"70px"}} className="sidebar row">
          <div className="top_section col-md col-sm mb-4">
              <h1 style={{display:isOpen? "block":"none",backgroundColor:"#000"}} className="logo">Logo</h1>
              <div style={{marginLeft:isOpen?"30px":"-10px",fontSize:isOpen? "25px":"30px"}} className="bars"> 
              <FaBars onClick={toggle}/>
              </div>
          </div>
          <div class="input-group search  col-md-4 mb-4" >
            <div class="form-outline" data-mdb-input-init>
              <input type="search" id="form1" class="form-control" placeholder="Search" style={{display:isOpen? "block":"none"}}  />
            </div>
          </div>
          {
            menuitems.map((items,index)=>(
              <NavLink to={items.path} key={index} className="link" activeclassName="active" style={{listStyle:"none",marginTop:"-10px"}} >
                <div className="icons  col-md-2 my-3 " style={{marginLeft:"20px"}}>{items.icon}</div>
                <div style={{display:isOpen? "block":"none",marginLeft:isOpen?"0px":"10px",marginRight:"70px"}} className="link_text  col-md mb-4 m-2 mt-3" >{items.name}</div>
              </NavLink>
            ))
          }
          <div style={{backgroundColor:"#000"}}>
          <div className="notify  col-md mb-4" style={{marginTop:"40px"}}>
          <IoIosNotifications className="i-notify" style={{marginBottom:isOpen ? "10px":"10px"}} />
          <p className="p-notify" style={{display:isOpen? "block":"none"}}>Notification</p>
          </div>
          <div className="notify1  col-md mb-4" style={{marginTop:"-15px"}}>
          <MdContactSupport  className="i-notify" style={{marginBottom:isOpen ? "10px":"10px"}}/>
          <p className="p-notify" style={{display:isOpen? "block":"none"}}>Support</p>
          </div>
          <div className="settingss  col-md mb-4" style={{backgroundColor:"#000",marginTop:"-15px"}}>
          <CiSettings className="i-notify" style={{marginBottom:isOpen ? "10px":"10px"}}/>
          <p className="p-notify" style={{display:isOpen? "block":"none"}}>Settings</p>
          </div>
          <div className="profile  col-md mb-4" style={{backgroundColor:"#000"}}>
            <div className="profile-1">
            <CgProfile style={{marginLeft:isOpen ? "0px":"-8px"}}/>
            </div>
            <div className="p-body" style={{display:isOpen? "block":"none",marginLeft:"-10px"}}>
              <span >User Name</span><br/>
              <span >xyz@gmail.com</span>
            </div>
          </div>
          </div>
      </div>
   <main>{children}</main>
   </div>
   </div>
  )
}
export default SideBar;
