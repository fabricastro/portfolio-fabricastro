import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


export const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>Mis trabajos recientes</h5>
    <h2>Portfolio</h2>
    
    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
        </div>
        <h3> Valorant Wiki</h3>
        <p>Credenciales para ingresar: <br /> Usuario: admin <br /> Contraseña: 1234</p>
      <div className="portfolio__item-cta">
        <a href="https://github.com/fabricastro" className='btn' target='_blank'>GitHub</a>
        <a href="https://valorant-wiki-7mowuzn6r-fabricastro.vercel.app" className='btn btn-primary' target='_blank'>Demo</a>        
      </div>  
      </article>
      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG2} alt="" />
        </div>
        <h3> DDF San Juan </h3>
      <div className="portfolio__item-cta">
        <a href="https://ddfsanjuan.com.ar" className='btn btn-primary' target='_blank'>Ver</a>  
      </div>  
      </article>
      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG3} alt="" />
        </div>
        <h3> Club de Titanes </h3>
        <div className="portfolio__item-cta">
        <a href="https://titanesclub.com/" className='btn btn-primary' target='_blank'>Ver</a>  
        </div>
      </article>
      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG4} alt="" />
        </div>
        <h3> Tacu Sistemas </h3>
        <div className="portfolio__item-cta">
        <a href="https://tacusistemas.com/" className='btn btn-primary'>Ver</a>    
        </div>
      </article>
      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG5} alt="" />
        </div>
        <h3> Tomas Uno Más</h3>
        <div className="portfolio__item-cta">
        <a href="https://tomasunomas.com.ar/" className='btn btn-primary'>Ver</a>  
        </div>
      </article>
      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG6} alt="" />
        </div>
        <h3> Marcelo Casiva</h3>
        <div className="portfolio__item-cta">
        <a href="https://marcelocasiva.com/" className='btn btn-primary'>Ver</a>   
        </div>
      </article>
    </div>
   </section>
  )
}
