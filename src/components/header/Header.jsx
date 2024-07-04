import React from 'react'
import './Header.css'
import { CTA } from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'


export const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Fabricio Castro</h1>
        <h5 className="text-light">Desarrollador Fullstack</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className="me rounded-full">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}


