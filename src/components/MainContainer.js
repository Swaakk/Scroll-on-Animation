import React,{useEffect} from 'react'
import "../styles/MainContainer.css"
import AOS from "aos"
import "aos/dist/aos.css";



function MainContainer() {
  useEffect(()=>{
    AOS.init({
      duration : 1000,
      easing : "ease",
      once : false
    });
  })
  return (
    <div className='MainContainer'>
      <div className='box' data-aos="fade-up"></div>
      <div className='box' data-aos="slide-right"></div>
      <div className='box' data-aos="slide-left"></div>
      <div className='box' data-aos="zoom-out-right"></div>
      <div className='box' data-aos="flip-left"></div>
      <div className='box' data-aos="fade-down-left"></div>
      <div className='box' data-aos="slide-left"></div>
      <div className='box' data-aos="flip-left"></div>
      <div className='box' data-aos="fade-down-left"></div>
      <div className='box' data-aos="slide-left"></div>
      <div className='box' data-aos="flip-left"></div>
      <div className='box' data-aos="fade-down-left"></div>
      <div className='box' data-aos="slide-left"></div>
      <div className='box' data-aos="flip-left"></div>
      <div className='box' data-aos="fade-down-left"></div>
      <div className='box' data-aos="slide-left"></div>
      <div className='box' data-aos="flip-left"></div>
      <div className='box' data-aos="fade-down-left"></div>
      <div className='box' data-aos="slide-left"></div>
      <div className='box' data-aos="flip-left"></div>
      <div className='box' data-aos="fade-down-left"></div>
      <div className='box' data-aos="slide-left"></div>
      <div className='box' data-aos="flip-left"></div>
      <div className='box' data-aos="fade-down-left"></div>
      <div className='box' data-aos="slide-left"></div>
      
         
      
    </div>
  )
}

export default MainContainer
