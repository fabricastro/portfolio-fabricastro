import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { TbAward } from "react-icons/tb";
import { BsFolder2Open } from "react-icons/bs";
import { MdBusiness } from "react-icons/md";

export const About = () => {
  return (
    <section id="about">
      <h2>Sobre mi</h2>

      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">

          <p>
          Soy estudiante avanzado de Desarrollo de Software en la Universidad Católica de Cuyo. Mi objetivo es convertirme en un desarrollador de alto rendimiento, adquiriendo nuevas habilidades y manteniéndome actualizado con las últimas tendencias tecnológicas. Trabajo como Desarrollador Frontend en la Dirección Provincial de Informática de San Juan, utilizando tecnologías como React, Angular, Vue.js, PHP, APIs, Git, GitHub y Postman. Soy apasionado, comprometido y disfruto trabajar en equipo para crear soluciones de software de alta calidad.
          </p>

          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experiencia</h5>
              <small> 2+ Trabajando</small>
            </article>

            <a href="#portfolio">
              <article className="about__card">
                <BsFolder2Open className="about__icon" />
                <h5>Proyectos</h5>
                <small> Algunos de mis proyectos</small>
              </article>
            </a>

            <a href="https://technodevs.com.ar/" target="_blank">
              <article className="about__card">
                <MdBusiness className="about__icon" />
                <h5>Emprendimiento</h5>
                <small> Technodevs - Agencia de desarrollo</small>
              </article>
            </a>
          </div>

          <a href="#contact" className="btn btn-primary">
            Hablemos!
          </a>
        </div>
      </div>
    </section>
  );
};
