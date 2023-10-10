
import React from "react";
import Navbar from "../home/navbar";
import { BiSupport } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { FaChalkboardTeacher } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

export default function tools() {
  return (
    <>
           <Navbar />
      <div className="contCourse">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "90px 0 0 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h5 style={{ fontSize: "45px", padding: "20px", color: "white" }}>
              آشنایی با میزکار تعمیرات
            </h5>
            <p style={{ fontSize: "20px", padding: "20px", fontWeight: "500" }}>
              ابزارهای تعمیرات سخت افزار یکی از مهمترین قسمت های تعمیرات موبایل هست
              امروزه بیشترین و شایع ترین ایرادهای تعمیراتی جز این دسته از
              تعمیرات میباشد که با یادگیری اون قطعا درامد خیلی بالایی خواهید
              داشت ... این دوره با بروزترین متد و تجربه ها و تکنیک های جدید
              بازار کار آموزش داده میشود که شمارو از هر دوره آموزشی دیگر بی نیاز
              میکند . این دوره پشتیبانی 5 ساله جهت کسب تجربه های بیشتر شما
              عزیزان دارد که بعد از اتمام این دوره وارد وارد بازار کار میشوید
              ...
            </p>

            <div>
              <div>
                <p style={{ fontSize: "25px" }}>
                  قیمت دوره مجازی :‌
                  <span style={{ fontSize: "30px", color: "white" }}>
                    {" "}
                   رایگان
                  </span>
                </p>
                <button className="allcoursebtn">ثبت نام دوره</button>
              </div>
              <div>
                <p style={{ fontSize: "25px" }}>
                  قیمت دوره حضوری :‌‌
                  <span style={{ fontSize: "30px", color: "white" }}>
                    {" "}
                    رایگان
                  </span>
                </p>
                <button className="allcoursebtn">ثبت نام دوره</button>
              </div>
            </div>
          </div>

          <div>
            <img
              style={{
                width: "650px",
                height: "450px",
                border: "25px solid white",
                borderRadius: "30px",
                marginBottom: "10px",
              }}
              src="images/miz.jpg"
              alt="info"
              title="info"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <div class="icon">
                <BiSupport
                  style={{
                    fontSize: "55px",
                    color: "black",
                    marginRight: "40px",
                  }}
                />
                <h4>5 سال پشتیبانی</h4>
              </div>
              <div class="icon">
                <ImBooks style={{ fontSize: "55px", color: "black" }} />
                <h4> 7 فصل</h4>
              </div>
              <div class="icon">
                <FaChalkboardTeacher
                  style={{
                    fontSize: "55px",
                    color: "black",
                    marginRight: "50px",
                  }}
                />
                <h4>آموزش تجربه محور</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <div id="infoTitle" className="info" style={{ textAlign: "center",marginLeft:'20px' }}>
            <p className="infoTitle"> پیش نیاز های این دوره</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#068fff",
              width: "340px",
              height: "70px",
              padding: "17px 40px 10px 10px",
              borderRadius: "20px",
            }}
          >
            <ol>
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginBottom: "10px",
                  listStyleType:'none'
                }}
              >
                دوره مبانی الکترونیک
              </li>
            </ol>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <div id="infoTitle" className="info" style={{ textAlign: "center" }}>
            <p className="infoTitle"> شیوه تدریس دراین دوره</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#068fff",
              width: "340px",
              height: "110px",
              padding: "17px 40px 10px 10px",
              borderRadius: "20px",
            }}
          >
            <ol>
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginBottom: "10px",
                  listStyleType:'none'
                }}
              >
                80٪ عملی
              </li>
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginBottom: "10px",
                  listStyleType:'none'
                }}
              >
                20٪ مفاهیمی
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <p
            style={{
              fontSize: "35px",
              fontWeight: "500",
              margin: "70px 0 50px 0",
            }}
          >
            سرفصل های دوره
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="acordiancourse"
          style={{ width: "00px", display: "flex", justifyContent: "center",marginBottom:'50px' }}
        >
          <Accordion>
            <Accordion.Item
              className="AccordionItem"
              style={{ width: "1200px" }}
            >
              <Accordion.Header
                style={{
                  boxShadow: " 0px 2px 3px rgba(0, 0, 0, 0.1607843137254902)",
                }}
              >
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">هیتر وهویه</div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>فعلا آیتمی ندارد</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="1">
              <Accordion.Header
                style={{
                  boxShadow: " 0px 2px 3px rgba(0, 0, 0, 0.1607843137254902)",
                }}
              >
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">سپراتور</div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>فعلا آیتمی ندارد</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="2">
              <Accordion.Header
                style={{
                  boxShadow: " 0px 2px 3px rgba(0, 0, 0, 0.1607843137254902)",
                }}
              >
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">لوپ</div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>فعلا آیتمی ندارد</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="3">
              <Accordion.Header
                style={{
                  boxShadow: " 0px 2px 3px rgba(0, 0, 0, 0.1607843137254902)",
                }}
              >
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">منبع تغذیه</div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>فعلا آیتمی ندارد</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="4">
              <Accordion.Header
                style={{
                  boxShadow: " 0px 2px 3px rgba(0, 0, 0, 0.1607843137254902)",
                }}
              >
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">دستگاه اولتراسونیک</div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>فعلا ایتمی ندارد</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="18">
              <Accordion.Header
                style={{
                  boxShadow: " 0px 2px 3px rgba(0, 0, 0, 0.1607843137254902)",
                }}
              >
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">تجهیزات شبکه ای</div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>فعلا ایتمی ندارد</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="61">
              <Accordion.Header
                style={{
                  boxShadow: " 0px 2px 3px rgba(0, 0, 0, 0.1607843137254902)",
                }}
              >
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
                    آشنایی با ابزار های مصرف
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>فعلا ایتمی ندارد</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>




    </>
  )
}
