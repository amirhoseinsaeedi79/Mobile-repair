
import React from "react";
import {TbDeviceMobileCog} from 'react-icons/tb' 
import { Link } from "react-router-dom";



export default function navbar() {
  
  // let home= document.getElementsByClassName('linkItem');

   function clickHandler(){
    window.scrollTo(0,0)
  }
 


  return (
    <>
    <div className="navbarAll">
      <nav class="navbar">
        <ul className="allLin">
          <Link to='/'  className="linkItem" onClick={()=>clickHandler()}>خانه </Link>
          <Link to='/courses'  className="linkItem" onClick={()=>clickHandler()}>دوره ها</Link>
          <Link to='/about' className="linkItem" onClick={()=>clickHandler()}>درباره ما</Link>
          <Link to='/login' className="linkItem" onClick={()=>clickHandler()}>ثبت نام/ورود</Link>
        </ul>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'120px'}}>
          <p  style={{fontSize:'30px',color:'#068fff',textShadow:'1px 1px 1px #068fff',fontWeight:'bold',marginLeft:'10px',marginTop:'10px'}}>Mobile-Repair</p>
          <TbDeviceMobileCog style={{fontSize:'60px',textShadow:'1px 1px 2px #068fff',color:'#068fff'}}/>
        </div>
      </nav>
      </div>
    </>
  );
}
