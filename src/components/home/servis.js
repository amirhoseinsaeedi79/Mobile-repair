import React from "react";

import { FaChalkboardTeacher } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiAlwaysdata } from "react-icons/si";

export default function servis() {
  return (
    <>
      <div className="info" data-aos="fade-left">
        <p className="info2">خدمات </p>
        <p className="infoTitle">خدمات مارا بررسی کنید</p>
      </div>

      <div class="info-item ">
        <div className="infoItems" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box">
            <div class="icon">
              <SiAlwaysdata style={{ fontSize: "35px" }} />
            </div>
            <h4>نقشه راه</h4>
            <p>آموزش نقشه راه برای حرفه ای شدن با بروز ترین مسیرها</p>
          </div>
        </div>
        <div  className="infoItems" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon">
              <BsCurrencyDollar style={{ fontSize: "35px" }} />
            </div>
            <h4>ایجاد درامد</h4>
            <p>
              بعداز اتمام دوره شما توسط اساتید به بازارکار جهت اشتغال معرفی
              میشوید
            </p>
          </div>
        </div>
        <div  className="infoItems" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon">
              <BiSupport style={{ fontSize: "35px" }} />
            </div>
            <h4>پشتیبانی</h4>
            <p>
              به مدت 5 سال پشتیبانی اساتید از دانشجویان انجام میشود برای کسب
              تجربه
            </p>
          </div>
        </div>
        <div  className="infoItems" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon">
              <FaChalkboardTeacher style={{ fontSize: "35px" }} />
            </div>
            <h4>آموزش</h4>
            <p>آموزش به دوصورت حضوری در آموزشگاه و مجازی  باجلسات ویدیویی</p>
          </div>
        </div>
      </div>
      <div className="start-img">
        <h6 className="title-repair">باتوجه به پیشرفت تکنولوژی وفناوری در دنیا و افزایش استفاده از تلفن همراه ، تعمیرات موبایل یکی از پرسودترین حوزه های کاری میباشد در دوره های آموزشی ما حرفه ای ترین تکنیک های بازار کار رو یاد میگیرید که با استفاده از این تکنیک ها در بازار به بهترین تبدیل میشوید</h6>
      </div>
    </>
  );
}
