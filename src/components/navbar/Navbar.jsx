import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'



export const Navbar = () => {
const [activeNav, serActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> serActiveNav('#')} className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> serActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> serActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBook/></a>
      <a href="#portfolio" onClick={()=> serActiveNav('#portfolio')} className={activeNav==='#services' ? 'active':''}><MdOutlineHomeRepairService/></a>
      <a href="#contact" onClick={()=> serActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}


