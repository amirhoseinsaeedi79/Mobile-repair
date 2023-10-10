import { useState } from 'react'
import React from 'react'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import { Link } from 'react-router-dom'
import { logDOM } from '@testing-library/react'

export default function Login() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [submit, setSubmit]=useState(false)

  function emailHandler(event){
    setEmail(
      email =>  email=event.target.value
    )}
    function passwordHandler(event){
      setPassword(
      password =>password=event.target.value
      )}







  return (
    <>
       <Navbar/>

       <div className='allForm'>
        <div className='loginForm'>
        <form >
        <div>
          <h4 style={{margin:'0 0 20px 30px',fontSize:'28px',fontWeight:'600'}}>ورود به حساب کاربری</h4>
        </div>
          <div>
          <label htmlFor="email">ایمیل</label><br/>
          <input className='formInput' id='email' type="email" value={email} onChange={(event)=>emailHandler(event)} placeholder='info@example.com' />
          </div>                
           <div>
          <label htmlFor="passworl">کلمه عبور</label><br/>
          <input className='formInput' id='passworl' type="password" value={password} onChange={(event)=>passwordHandler(event)} placeholder='********************' />
          </div>           
          <div>
            <input className='formBtn' type="submit" value={'ورود به حساب'} />
          </div>
        <div className='alltextform'>
        
          <Link to='/password' className='textForm1' >فراموشی رمز عبور</Link>
        </div>
        <div className='alltextform'>
        <Link to='/signup' className='textForm item2' >حساب کاربری ندارید؟ ثبت نام کنید</Link>
        </div>
        </form>
        </div>
       </div>
 
       <Footer/>
    
    </>
  )
}
