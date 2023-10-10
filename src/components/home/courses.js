import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Courses() {


  function clickHandler(){
    window.scrollTo(0,0)
  }
 
  return (
    <>
      <div id="infoTitle" className="info" data-aos="fade-left" style={{marginRight:'90px'}}>
        <p className="info2">دوره های آموزشی (حضوری و مجازی)</p>
        <p  className="infoTitle">آموزش را شروع کنید ...</p>
      </div>

      <div className="allCards">
        <div  data-aos="zoom-in-up" data-aos-delay="100">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img-card" variant="top" src="images/hard.jpg" />

            <div className="offer-img">50%</div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "25px",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                آموزش سخت افزار
              </Card.Title>
              <Card.Text>
                دوره سخت افزار تعمیرات موبایل با برترین تکنیک های بروز در
                بازارکار
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "18px" }}>
                  حضوری(15 نفره)
                </p>
                <div class="main">
                  <div className="off">
                    <p>2,500,000</p>
                    <span>تومان</span>
                  </div>
                  <span>1,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "18px" }}>
                  مجازی (100 جلسه)
                </p>
                <div class="main">
                  <div className="off">
                    <p>6,000,000</p>
                    <span>تومان</span>
                  </div>
                  <span>3,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </Card.Body>
            <Link  onClick={()=>clickHandler()} to='/hardware' className="buttonCard">مشاهده و ثبت نام</Link>
          </Card>
        </div>
        {/* =============================================== */}
        <div  data-aos="zoom-in-up" data-aos-delay="200">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img-card" variant="top" src="images/narm.jpg" />

            <div className="offer-img">50%</div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "25px",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                آموزش نرم افزار
              </Card.Title>
              <Card.Text>
                دوره نرم افزار تعمیرات موبایل با برترین تکنیک های بروز در
                بازارکار
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "18px" }}>
                  حضوری(15 نفره)
                </p>
                <div class="main">
                  <div className="off">
                    <p>3,500,000</p>
                    <span>تومان</span>
                  </div>
                  <span>1,800,000</span>
                  <span>تومان</span>
                </div>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "18px" }}>
                مجازی (80 جلسه)
                </p>
                <div class="main">
                  <div className="off">
                    <p>4,000,000</p>
                    <span>تومان</span>
                  </div>
                  <span>2,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </Card.Body>
            <Link  onClick={()=>clickHandler()} to='/software' className="buttonCard">مشاهده و ثبت نام</Link>
          </Card>
        </div>
        {/* =============================================== */}
        <div  data-aos="zoom-in-up" data-aos-delay="300">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img-card" variant="top" src="images/miz.jpg" />

            <div className="offer-img">پیش نیاز</div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "25px",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                اشنایی با میزکار تعمیرات
              </Card.Title>
              <Card.Text>
                برای هر تعمیرکاری آشنایی با میزکار و ابزارها خیلی مهم است که در این دوره یاد میگیرید
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "18px",marginBottom:'35px' }}>
                  حضوری(15 نفره)
                </p>
                
                  <span style={{ position: "relative", top: "18px",marginBottom:'35px' }}>رایگان</span>

                </div>

              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "18px" }}>
                مجازی (20 جلسه)
                </p>
                <div class="main">
                  <span style={{ position: "relative", top: "18px" }}>رایگان</span>

                </div>
              </div>
            </Card.Body>
            <Link  onClick={()=>clickHandler()} to='/tools' className="buttonCard">مشاهده و ثبت نام</Link>
          </Card>
        </div>
        {/* ================================================== */}
        <div  data-aos="zoom-in-up" data-aos-delay="400">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img-card" variant="top" src="images/base.jpg" />

            <div className="offer-img">پیش نیاز</div>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "25px",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                آموزش مبانی الکترونیک
              </Card.Title>
              <Card.Text>
                مبانی الکترونیک پیش نیاز برای ورود به دنیای تعمیرات موبایل  میباشد
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "40px",marginBottom:'60px' }}>
                  حضوری(15 نفره)
                </p>
                
                  <span style={{ position: "relative", top: "40px",marginBottom:'60px' }}>رایگان</span>

                </div>

              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ position: "relative", top: "18px",marginBottom:'15px' }}>
                مجازی (20 جلسه)
                </p>
                <div class="main">
                
                   
                  <span style={{ position: "relative", top: "18px",marginBottom:'15px' }}>رایگان</span>

                </div>
              </div>
            </Card.Body>
            <Link  onClick={()=>clickHandler()}  to='/base' className="buttonCard">مشاهده و ثبت نام</Link>
          </Card>
        </div>
      </div>
    </>
  );
}
