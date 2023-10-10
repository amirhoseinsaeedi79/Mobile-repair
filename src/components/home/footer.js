import React from "react";
import { TbDeviceMobileCog } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";

import { Link } from "react-router-dom";

export default function footer() {

  function clickHandler(){
    window.scrollTo(0,0)
  }
 
  return (
    <>
      <div className="footer">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "170px",
            }}
          >
            <p
              style={{
                fontSize: "30px",
                color: "chocolate",
                fontWeight: "bold",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              Mobile-Repair
            </p>
            <TbDeviceMobileCog
              style={{ fontSize: "60px", color: "chocolate" }}
            />
          </div>
          <div>
            <p>آدرس : تهران خیابان ولیعصر</p>
            <p> شماره تماس : 0211234567</p>
            <p>ایمیل : mobile@gmail.com</p>
          </div>
          <div >
            <FaLinkedinIn className="footerIkons"/>
            <BsInstagram className="footerIkons"/>
            <FaFacebookF className="footerIkons"  />
            <AiOutlineTwitter className="footerIkons" />
          </div>
        </div>
        {/* ========================= */}
        <div className="footerLink">
          <div className="links">
            <h4>لینک ها</h4>
            <ul className="footerListLink" >
            <Link onClick={()=>clickHandler()}  to='/' className="footerLinkItem">خانه</Link>
            <Link onClick={()=>clickHandler()}  to='/courses' className="footerLinkItem">دوره ها</Link>
          <Link onClick={()=>clickHandler()}  to='/about' className="footerLinkItem">ارتباط باما</Link>
          <Link  onClick={()=>clickHandler()} to='/login' className="footerLinkItem">ثبت نام/ورود</Link>
            </ul>
          </div>
          <div className="link2">
            <h4>خدمات ما</h4>
            <ul>
              <li>آموزش</li>
              <li>پشتیبانی</li>
              <li>اشتغال به کار</li>
              <li>خدمات تعمیرات</li>
            </ul>
          </div>
        </div>
        {/* ========================= */}
        <div>
          <form>
          <h5>جستجوی موارد بیشتر ...</h5>
            <input className="inputSearch" type="email" />
            <button className="inputSubmit"><BiSearchAlt2/></button>
          </form>
        </div>
      </div>
    </>
  );
}
