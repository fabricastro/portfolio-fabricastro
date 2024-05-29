import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
   <section id='experience'>
    {/* <h5>Mis Skills</h5> */}
    <h2>Mi experiencia</h2>
    
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <h4>HTML</h4>
              <small className='text-light'>Experiencia</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Vue</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Wordpress</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Elementor</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>WooCommerce</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
          </div>
      </div>
    </div>
   </section>
  )
}

