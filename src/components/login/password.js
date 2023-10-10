import React from 'react'
import Navbar from '../home/navbar'
import Footer from '../home/footer'

export default function password() {
  return (
    <>
      <Navbar/>
<div className='allForm'>
 <div className='loginForm' style={{height:'270px'}}>
 <form >
 <div>
   <h4 style={{margin:'0 0 20px 30px',fontSize:'28px',fontWeight:'600'}}>تغییر کلمه عبور</h4>
 </div>
   
   <div>
   <label htmlFor="text">شماره تماس</label><br/>
   <input className='formInput' id='text' type="text" placeholder='*********09'/>
   </div>                       
   <div>
     <input className='formBtn' type="submit" value={'دریافت کد تایید'} />
   </div>
 </form>
 </div>
</div>

<Footer/>






    </>
  )
}
