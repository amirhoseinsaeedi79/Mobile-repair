import React from "react";
import {BsChevronDoubleDown} from 'react-icons/bs'
import Navbar from './navbar'




export default function header() {

  function scrollHandler(){
    window.scrollTo(0,200)
  }

  return (
    <>

      <Navbar/>
  
      <div id="home" className="con-header" >
        <h1 style={{color:'#eeeeee',textShadow:'1px 1px 2px white',fontSize:'65px',marginTop:'1rem'}}>آموزش تخصصی تعمیرات موبایل</h1>
        <span className="floating" style={{padding:'20px',color:'white',position:'absolute',left:'90px',borderRadius:'30px',fontSize:'35px',textShadow:'1px 1px 2px white',fontWeight:'bold'}}>نرم افزار</span>
        <span className="floating" style={{padding:'20px',color:'white',position:'absolute',right:'90px',borderRadius:'30px',fontSize:'35px',textShadow:'1px 1px 2px white',fontWeight:'bold'}}>سخت افزار</span>
        <p style={{color:'#068fff',textShadow:'0 0 1px #c9c9c9',fontSize:'40px',fontWeight:'500',marginTop:'3rem'}}>با جدیدترین متد آموزشی و کاملا علمی </p>
        <a href="#infoTitle" className="headerBut"> شروع آموزش</a>
        <BsChevronDoubleDown className="floating2" onClick={()=>scrollHandler()} style={{color:'#068fff',fontSize:'80px',marginRight:'10px',marginTop:'10px'}}/>
      </div>
    </>
  );
}

