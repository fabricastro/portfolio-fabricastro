import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { TbAward } from "react-icons/tb";
import { BsFolder2Open } from "react-icons/bs";
import { MdBusiness } from "react-icons/md";

export const About = () => {
  return (
    <section id="about">
      <h5> Ver </h5>
      <h2>Sobre mi</h2>

      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          
          <p>
            Soy un apasionado desarrollador de software con experiencia en el
            campo del frontend. En mi actual empleo desarrollo los portales
            institucionales de la provincia de San Juan, Argentina, utilizando tecnologías como VUE.JS, PHP, WORDPRESS. Tengo una
            experiencia sólida en WordPress, WooCommerce y Elementor, donde he
            trabajado en la creación de distintos sitios web personalizados y
            tiendas en línea, brindando a mis clientes soluciones altamente
            personalizadas y efectivas.
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
