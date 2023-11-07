import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'


export const Services = () => {
  return (
    <section id='services'>
      <h5>Que ofrezco</h5>
      <h2>Servicios</h2>
      
      <div className="container services__container">
        
        {/* UX/UI */}
        <article className='service'>
          <div className='service__head'>
            <h3>UX/UI Design</h3>
          </div>          
          <ul className='service__list'> 
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        
        {/* Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>UX/UI Design</h3>
          </div>
          
          <ul className='service__list'> 
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className='service__head'>
            <h3>UX/UI Design</h3>
          </div>
          
          
          {/*Creacion de contenido*/}               
          <ul className='service__list'> 
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

