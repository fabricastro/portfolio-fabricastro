import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'


export const Contact = () => {
  return (
   <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Conmigo</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Mail</h4>
            <h5>fabricastrook@gmail.com</h5>
            <a href="mailto:fabricastrook@gmail.com" target={'_blank'}>Enviame un mensaje</a>
          </article>
          
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Fabricio Castro</h5>
            <a href="https://m.me/fabricio.castro.9028" target={'_blank'}>Enviame un mensaje</a>
          </article>
          
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2644412511</h5>
            <a href="https://wa.me/2644412511" target={'_blank'}>Enviame un mensaje</a>
          </article>
           
        </div>
        {/* fin de opciones de contacto */}     
      </div>
   
   </section>
  )
}