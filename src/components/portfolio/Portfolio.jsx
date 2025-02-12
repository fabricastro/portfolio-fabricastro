import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/technodevs.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/lia.png'
import IMG5 from '../../assets/palta.png'
import IMG6 from '../../assets/gob.png'


export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='font-bold'>Mis trabajos recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <div className='container-info'>
            <h3> Valorant Wiki</h3>
            <p>Credenciales para ingresar: <br /> Usuario: admin <br /> Contraseña: 1234</p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/fabricastro/DesarrolloAplicativos" className='btn' target='_blank'>GitHub</a>
              <a href="https://valorant-wiki-7mowuzn6r-fabricastro.vercel.app" className='btn btn-primary' target='_blank'>Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <div className='container-info'>
            <h3> Agencia Technodevs - Landing Page </h3>
            <div className="portfolio__item-cta">
              <a href="https://technodevs.com.ar/" className='btn btn-primary' target='_blank'>Ver</a>
              <a href="https://github.com/fabricastro/LandingTechnodevs" className='btn' target='_blank'>GitHub</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <div className='container-info'>
            <h3> Club de Titanes - Sistema web de referidos</h3>
            <div className="portfolio__item-cta">
              <a href="https://titanesclub.com/" className='btn btn-primary' target='_blank'>Ver</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <div className='container-info'>
            <h3> Lía de Bárbara - Landing Page </h3>
            <div className="portfolio__item-cta">
              <a href="https://www.liadebarbara.com/" className='btn btn-primary'>Ver</a>
              <a href="https://github.com/fabricastro/LandingLia" className='btn' target='_blank'>GitHub</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <div className='container-info'>
            <h3> Palta - SAAS ERP</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.palta.cloud/signin" className='btn btn-primary'>Ver</a>
              <a href="https://github.com/fabricastro/ERP-software" className='btn' target='_blank'>GitHub</a>
            </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <div className='container-info'>
            <h3> Registro Civil | Gobierno de San Juan - Sitio Institucional</h3>
            <div className="portfolio__item-cta">
              <a href="https://registrocivil.sanjuan.gob.ar/" className='btn btn-primary'>Ver</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
