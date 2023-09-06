import React from 'react';
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {BsBook} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlineMessage} from 'react-icons/ai';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActive] = useState('#');
  return (
    <nav>
      <a href="#"  onClick={()=> setActive('#')} className={activeNav === '#'? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActive('#about')} className={activeNav === '#about'? 'active' : ''}><BsPerson/></a>
      <a href="#experience" onClick={()=> setActive('#experience')} className={activeNav === '#experience'? 'active' : ''}><BsBook/></a>
      <a href="#services" onClick={()=> setActive('#services')} className={activeNav === '#services'? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActive('#contact')} className={activeNav === '#contact'? 'active' : ''}><AiOutlineMessage/></a>
    
    </nav>
  )
}

export default Nav;