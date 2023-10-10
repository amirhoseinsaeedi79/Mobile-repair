import React from "react";
import Navbar from "../home/navbar";
import Footer from '../home/footer'
export default function about() {


 

  return (
    <>
      <Navbar />
      <div id="home" className="con-header headerInfo">
        <div style={{ marginTop: "70px" }}>
          <h1
            style={{
              color: "white",
              textShadow: "1px 1px 2px black",
              fontSize: "90px",
              fontWeight: "500",
              position: "relative",
              bottom: "5px",
              marginBottom: "20px",
            }}
          >
            درباره ما
          </h1>
          <p style={{ color: "white", fontSize: "22px", marginTop: "30px" }}>
            آموزشگاه ما با بیش از نیم قرن فعالیت اولین موسسه آموزشی در کشور بوده
            که تعمیرات موبایل رو به صورت تخصصی آموزش میدهد
          </p>
          <p style={{ color: "white", fontSize: "22px", marginTop: "30px" }}>
            تمامی آموزش های ما نتیجه سال ها کاروتلاش میباشد ...
          </p>
        </div>
      </div>
      <div
        className="info"
        style={{ marginBottom: "40px", marginRight: "10rem" }}
        data-aos="fade-left"
      >
        <p className="info2" style={{ fontSize: "35px", color: "black" }}>
          درباره آموزشگاه
        </p>
      </div>

      <div
        style={{
          width:'100%',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "40px 0 0 40px",
         backgroundColor:'white'}}
      >
        <div data-aos="fade-left">
          <img
            style={{ width: "550px", height: "450px",padding:'20px',borderRadius:'40px' }}
            src="images/about.jpg"
            alt="info"
            title="info"
          />
        </div>
        <div >
          <p style={{ fontSize: "22px",width:'700px', padding: "40px", lineHeight: "40px",marginTop:'20px' }}>
            آموزشگاه ما در سال 1379 با تلاش و همت مهندس گودرزی افتتاح شد و بیشتر
            از نیم قرن افتخار خدمت به شما عزیزان رو داریم ... تا کنون بیشتر از
            25000 دانشجوی و علاقمند به این حرفه بعد از آموزش وارد بازار کار شدند
            ....آموزشگاه ما با جدیدترین متد آموزشی در دنیا و با پیشرفته ترین
            ابزارهای تعمیرات،بصورت تخصصی از مبتدی تا حرفه ای به شما علاقمندان به
            این حرفه آموزش میدهد ... تمامی آموزش های ما حاصل سال ها تلاش و تجره
            اساتید برتر در حوزه تعمیرات موبایل هست که به شما علاقه مندان آموزش
            داده میشود
          </p>
        </div>
      </div>

      <div
        style={{
          width:'100%',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "10px 0 0 40px",

         }}
      >
        <div >
          <p style={{ fontSize: "22px",width:'700px', padding: "40px", lineHeight: "40px",marginTop:'70px' }}>
         دانشجویان عزیز در طول دوره یادگیری خود با انواع برند های مختلف تلفن همراه کار میکنند تا با انواع ایرادها و قلق های تعمیراتی اشنا شوند تا در بازار کار خدمات خودرا به بهترین شکل ممکن ارايه کنند ... همین امر باعث میشود با بهترین و جدیدترین تجربه های بازار تعمیرات وارد بازار شوند و در کسب و کار خود بهترین باشند...
          </p>
        </div>
        <div data-aos="fade-right">
          <img
            style={{ width: "550px", height: "450px",padding:'20px',borderRadius:'40px' }}
            src="images/info3.jpg"
            alt="info"
            title="info"
          />
        </div>
      </div>
      <div 
        style={{
          width:'100%',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "10px 0 0 40px",
          backgroundColor:'white'
         }}
      >
        <div data-aos="fade-left">
          <img
            style={{ width: "550px", height: "450px",padding:'20px',borderRadius:'40px',marginBottom:'10px'}}
            src="images/about-2.jpg"
            alt="info"
            title="info"
          />
        </div>
        <div >
          <p style={{ fontSize: "22px",width:'700px', padding: "40px", lineHeight: "40px",marginTop:'100px', }}>
        هدف آموزشگاه ما آموزش و پرورش برترین تعمیرکاران تلفن همراه در سطح کشور و حتی بین المللی هست که با ارایه خدمات بروز باعث پیشرفت این حوزه کسب و کار میشوند که در نهایت باعث رضایت مردم از خدمات استاندارد تعمیرات تلفن میباشد ...
          </p>
        </div>
      </div>
       <div 
        style={{
          width:'100%',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "10px 0 0 40px",

         }}
      >
        <div >
          <p style={{ fontSize: "22px",width:'700px', padding: "40px", lineHeight: "40px",marginTop:'100px', }}>
           پس از اتمام دوره های آموزشی به دانشجویان عزیز مدرک بین المللی که در 32 کشور صنعتی از جمله آلمان مورد تایید هست اعطا میشود که با استفاده از آن میتوانند در حوزه کاری خود پیشرفت زیادی کنند 
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            style={{ width: "550px", height: "450px",padding:'20px',borderRadius:'40px',marginBottom:'10px'}}
            src="images/madrak.jpg"
            alt="info"
            title="info"
          />
        </div>
      </div>
          <div 
        style={{
          width:'100%',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "10px 0 0 40px",
          backgroundColor:'white'
         }}
      > 
       <div data-aos="fade-left">
          <img
            style={{ width: "550px", height: "450px",padding:'20px',borderRadius:'40px',marginBottom:'10px'}}
            src="images/callwithus.jpg"
            alt="info"
            title="info"
          />
        </div>
        <div >
          
          <ul style={{ fontSize: "24px",width:'700px', padding: "40px", lineHeight: "50px",marginTop:'30px',listStyleType:'none' }}>
            <li  data-aos="zoom-in-up" data-aos-delay="100" > آدرس : تهران - خیابان ولیعصر</li>
            <li  data-aos="zoom-in-up" data-aos-delay="200">شماره تماس : 0211234567</li>
            <li  data-aos="zoom-in-up" data-aos-delay="300">  mobile@gmail.com : Email</li>
            <li  data-aos="zoom-in-up" data-aos-delay="400"> mobile-repair : instagram@</li>
            <li  data-aos="zoom-in-up" data-aos-delay="400"> mobile-repair : instagram@</li>
            <li  data-aos="zoom-in-up" data-aos-delay="400"> mobile-repair1 : facebook@</li>

          </ul>
    
        </div>
       
      </div>
      
      {/* ================================footer */}
      <Footer/>

     

    </>
  );
}
