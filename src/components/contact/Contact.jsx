import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'


export const Contact = () => {
  return (
   <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Conmigo</h2>
      
      <div className="container contact__container w-[58%] md:w-[20%]">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Mail</h4>
            <h5>fabricastrook@gmail.com</h5>
            <a href="mailto:fabricastrook@gmail.com" target={'_blank'} className='text-[#00a76d]'>Enviame un mensaje</a>
          </article>
          
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Fabricio Castro</h5>
            <a href="https://www.linkedin.com/in/fabricio-castrodev/" target={'_blank'} className='text-[#00a76d]'>Enviame un mensaje</a>
          </article>
          
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2644412511</h5>
            <a href="https://wa.me/2644412511" target={'_blank'} className='text-[#00a76d]'>Enviame un mensaje</a>
          </article>
           
        </div>
        {/* fin de opciones de contacto */}     
      </div>
   
   </section>
  )
}
