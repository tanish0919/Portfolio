import React from 'react';
import "./header.css";
import CTA from  "./CTA";
import ME from "../../assets/IMG20231017100748-removebg-preview.png";
import HeaderSocial from './HeaderSocial';
import ScrollImg from '../../assets/clipart527622.png'


const Header = () => {
  return (
    
    <>
    
      <div className="header">
        <div className='container header__container'>
          <h5>Hello, I'm</h5>
          <h1>KUMAR TANISH</h1>
          <h5 className='text-light'>a Fullstack Developer</h5> 
          <CTA/>         
          <HeaderSocial/>
        
          <div className='me'>
            <img src={ME} alt="me" /> 
          </div>
          <a href="#contact" >
            <img src={ScrollImg} alt="downIMG" className="scroll__image" />
          </a>

        </div>
      </div>

    </>
  )
}

export default Header;