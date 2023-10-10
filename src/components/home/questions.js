import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function questions() {

  return (

    <>
   
      <div
        className="info"
        style={{ marginBottom: "40px",marginRight:'90px' }}
        data-aos="fade-left"
      >
        <p className="info2" style={{ fontSize: "35px", color: "black" }}>
          سوالات پرتکرار شما عزیزان
        </p>
      </div>
      
      {/* ============================================= */}

      <div className="allAcordian">
        <div data-aos="zoom-in-up" className="acordian1">
          <Accordion >
            <Accordion.Item className="AccordionItem">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian" >
                طول دوره تعمیرات موبایل چقدر است ؟                      
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                دوره تعمیر موبایل عمومی در 45 ساعت و فوق تخصصی در 150 ساعت آموزش
                داده می شود. این دوره در ساعات منعطفی برگزار می شود: به صورت
                فشرده در طول سه هفته از شنبه تا چهارشنبه روزی سه ساعت ، کلاسهای
                یکماهه 6 تا 8 ، و کلاسهایی که فقط پنج شنبه ها برگزار می شود.
              </Accordion.Body>
            </Accordion.Item >
            <Accordion.Item className="AccordionItem" eventKey="1">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian" >
                دوره تعمیرات موبایل شامل چه گوشی هایی میشود ؟                     
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              در دوره تعمیرات موبایل تعمیر برندهای مختلف موبایل با سیستم عامل های مختلف از جمله اندروید ، ios و تعمیرات تبلت را تخصصی و بصورت عملی یاد می گیرید.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="2">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
                پس از پایان دوره مدرکی داده میشود ؟                     
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              پس از پایان دوره مدرک آموزشگاه زیر نظر سازمان فنی حرفه ای که در داخل کشور و در شرکت های خصوصی و دولتی دارای اعتبار هست تقدیم شما میشود. برای مدرک بین المللی، کارآموز را به سازمان فنی حرفه ای معرفی میکنیم و پس از قبولی در آزمون کتبی و عملی مدرک رسمی و بین المللی به کاراموز تعلق می گردد.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="3">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
                برای شروع باید چه مدرک تحصیلی داشته باشیم ؟                     
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              اگر شما حداقل سواد سیکل را داشته باشید می توانید در کلاسها شرکت کنید چون تمامی دوره های آموزشگاه فن آموزان از مقدمات دوره شروع می شود و رفته رفته مباحث پیشرفته و تخصصی هم آموزش داده می شود و جای هیچ نگرانی برای افردای که مدرک تحصیلی بالا ندارند و یا رشته آنها الکترونیک نیست ، وجود ندارد.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="4">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
              این رشته بازارکار خوبی داره ؟                    
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              این رشته مطمئنا یکی از بهترین شاخه های فنی می باشد و بدلیل تخصصی بودن آن دارای بازار کار خوبی است. هیچ محدودیت درآمدی برای فعالیت در این شاخه جود ندارد و با مشاوره بازار کار و آموزشی که در آموزشگاه تعمیرات موبایل می بینید به شما کمک می کنیم یک شغل پردرآمد را شروع کنید.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* ============================================== */}
        <div data-aos="zoom-in" className="acordian2">
        <Accordion>
            <Accordion.Item className="AccordionItem">
              <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
             بعد از تمام دوره میشود وارد بازار کار شد ؟                     
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              آموزشگاه برای ورود شما به بازار کار کلاسهای مشاوره و کسب و کار را بصورت رایگان برای کارآموزان در نظر گرفته است تا بتوانید بعد از دوره وارد بازار کار شوید. در خصوص مشاوره و راهنمایی های لازم حتی بعد از اتمام دوره هم می توانید از اساتید کمک بگیرید.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" eventKey="1">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
             دوره ها تا چه مدتی پشتیبانی دارد ؟                    
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              پشتیبانی در طول دوره و پس از اتمام دوره بسته به صورت نامحدود و تلفنی و یا حضوری انجام می شود.
              </Accordion.Body>
            </Accordion.Item> <Accordion.Item className="AccordionItem" eventKey="2">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
              آیا میتوان در یکی از دوره ها ثبت نام کرد ؟                    
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                بله مشکلی نداره ...
              </Accordion.Body>
            </Accordion.Item> <Accordion.Item className="AccordionItem" eventKey="3">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
               کلاس ها به صورت عملی برگزار میشود ؟                     
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                80 درصد اموزش ما بصورت عملی هست
              </Accordion.Body>
            </Accordion.Item> <Accordion.Item className="AccordionItem" eventKey="4">
            <Accordion.Header>
                <div className="acordianHeader">
                  <div className="textHeaderAcordian">
               زمان برگزاری کلاس های حضوری چطوری هست ؟            
                  </div>
                  <div></div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              کلاسهای خصوصی در شرکت موبایل برگزار می شود و زمان برگزاری کلاس با هماهنگی بین کارآموز و برنامه آموزشگاه می باشد.
              </Accordion.Body>
            </Accordion.Item> 
          </Accordion>
        </div>
      </div>
    </>
  );
}
