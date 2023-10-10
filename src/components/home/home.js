import React from 'react'
import Header from './header'
import Company from './company'
import  Servis  from './servis'
import Course from './courses'
import Questions from './questions'
import Footer from './footer'
import './../styles.css'

export default function home() {

 let name = window.screenTop;

 console.log(name);



  return (
    <>
        <Header />
        <Company/>
        <Servis/>
        <Course/>
        <Questions/>
        <Footer/>


    </>
  )
}
