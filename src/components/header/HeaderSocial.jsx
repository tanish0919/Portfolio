import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';


const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kumar-tanish/" className="icons">
        <BsLinkedin />
      </a>
      <a href="https://github.com/tanish0919" className="icons">
        <FaGithub />
      </a>
      
    </div>
  );
}

export default HeaderSocial