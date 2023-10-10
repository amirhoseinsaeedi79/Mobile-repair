import React from 'react'
import Navbar from '../home/navbar'
import Footer from '../home/footer'

export default function Signup() {
  return (
    <>

<Navbar/>

<div className='allForm'>
 <div className='loginForm' style={{height:'500px'}}>
 <form >
 <div>
   <h4 style={{margin:'0 0 20px 30px',fontSize:'28px',fontWeight:'600'}}>ثبت نام</h4>
 </div>
   <div>
   <label htmlFor="email">ایمیل</label><br/>
   <input className='formInput' id='email' type="email" placeholder='info@example.com' />
   </div> 
   <div>
   <label htmlFor="text">شماره تماس</label><br/>
   <input className='formInput' id='text' type="text" placeholder='*********09'/>
   </div>                  
    <div>
   <label htmlFor="passworl">کلمه عبور</label><br/>
   <input className='formInput' id='passworl' type="password" placeholder='********************' />
   </div>  
   <div>
   <label htmlFor="passworl">تکرار کلمه عبور</label><br/>
   <input className='formInput' id='passworl' type="password" placeholder='********************' />
   </div>           
   <div>
     <input className='formBtn' type="submit" value={'ایجاد حساب'} />
   </div>
 </form>
 </div>
</div>

<Footer/>





    </>
  )
}
