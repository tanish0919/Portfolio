import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {DiHeroku} from 'react-icons/di';
import {GiArtificialIntelligence} from 'react-icons/gi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https;//linkedin.com" className='icons'><BsLinkedin/></a>
        <a href="https;//github.com" className='icons'><FaGithub/></a>
        <a href="https;//jovian.com" className='icons'><GiArtificialIntelligence/></a>
        <a href="https;//heroku.com" className='icons'><DiHeroku/></a>
    </div>
  )
}

export default HeaderSocial