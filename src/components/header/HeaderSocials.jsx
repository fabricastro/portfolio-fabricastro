import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {TiSocialInstagram} from 'react-icons/ti'



export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/fabricio-castrodev/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/fabricastro" target="_blank"><AiFillGithub/></a>
        <a href="https://www.instagram.com/fabricastro_/" target="_blank"><TiSocialInstagram/></a>
      
    </div>
  )
}
