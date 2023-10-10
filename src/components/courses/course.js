import React from 'react'
import Navbar from "../home/navbar";
import Footer from '../home/footer'
import Courses from '../home/courses';

export default function course() {
  return (
    <>
    <Navbar />
    <div id="infoTitle" className="info" data-aos="fade-left" style={{marginRight:'90px',marginTop:'110px'}}>
        <p className="info2">مسیر یادگیری</p>
        <p  className="infoTitle">مسیر یادگیری  تعمیرات موبایل رو بررسی کنید</p>
      </div>
      <div style={{width:'100%',height:'450px',
          backgroundColor:'white'}}>
      <div
        style={{
         
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "20px 0 0 40px",
          position:'relative',
          left:'50px'
}}
      >
        <div>
          <img
            style={{ width: "550px", height: "450px",padding:'20px',borderRadius:'40px', }}
            src="images/roadmap.jpeg"
            alt="info"
            title="info"
          />
        </div>
        <div >
          <ol style={{ fontSize: "22px",width:'700px', padding: "40px", lineHeight: "42px",marginTop:'20px' }}>
            <li  data-aos="zoom-in-up" data-aos-delay="100" >آشنایی با الکترونیک</li>
            <li  data-aos="zoom-in-up" data-aos-delay="200">اشنایی با میزکار تعمیرات</li>
            <li  data-aos="zoom-in-up" data-aos-delay="300">آموزش تعمیرات سخت افزار</li>
            <li  data-aos="zoom-in-up" data-aos-delay="400">تلاش برای کسب تچربه ومهارت بیشتر</li>
            <li  data-aos="zoom-in-up" data-aos-delay="500">آموزش تعمیرات نرم افزار</li>
            <li  data-aos="zoom-in-up" data-aos-delay="600">تلاش برای کسب تچربه بیشتر</li>
            <li  data-aos="zoom-in-up" data-aos-delay="700">تلاش برای کسب تچربه ومهارت بیشتر</li>
            <li  data-aos="zoom-in-up" data-aos-delay="800">اشنایی با مهارت های نرم بازارکار سپس تلاش برای پیشرفت</li>

          </ol>
        </div>
      </div>
      </div>
      <Courses/>
      <Footer/>



    </>
  )
}
