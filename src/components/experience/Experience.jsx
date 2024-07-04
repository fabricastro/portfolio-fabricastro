import React from 'react'
import './Experience.css'
import { SiWoo } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaPhp, FaWordpress, FaElementor } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

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
              <FaHtml5  className='experience__details-icons'/>
              <h4>HTML</h4>
              <small className='text-light'>Experiencia</small>
            </article>
            <article className='experience_details'>
              <FaCss3Alt  className='experience__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <IoLogoJavascript className='experience__details-icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaReact  className='experience__details-icons'/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaVuejs  className='experience__details-icons'/>
              <div>
              <h4>Vue</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaPhp  className='experience__details-icons'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaWordpress className='experience__details-icons'/>
              <div>
              <h4>Wordpress</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaElementor className='experience__details-icons'/>
              <div>
              <h4>Elementor</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiWoo  className='experience__details-icons'/>
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

