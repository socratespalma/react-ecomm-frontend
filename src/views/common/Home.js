import React, { useEffect } from "react";
import { FaCreditCard, FaGlobeAmericas } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollUp from "../../components/ScrollUp";
import Carousel from "../../components/Carousel";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="trick">
      <Header />
      {/* HERO section */}
      <section className="hero-section">
        <div className="hero-section__copy">
          <h1 className="hero-section__title">
            Somos una tienda <span className="bb-word">diferente</span>
          </h1>
          <h2 className="hero-section__subtitle">
            Brindamos la mejor experiencia a nuestros clientes
          </h2>
          <a href="#slogan-section" className="hero-section__cta">
            Aprender más
          </a>
        </div>
      </section>
      {/* SLOGAN */}
      <section id="slogan-section" className="slogan-section">
        <p className="slogan-section__text">
          Prendas y accesorios vintage, con un toque único y especial.
        </p>
      </section>
      {/* NOVEDADES */}
      <section className="news-section">
        <h1 className="news-section__title">Novedades</h1>
        <Carousel />
      </section>
      {/* LO MAS BUSCADO (Component) */}
      <section className="ms-section">
        <h1 className="ms-section__title">Lo más buscado</h1>
        <div className="ms-section__grid">
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={
                require("../../assets/images/sombreroclasicoRojo.jpg").default
              }
              alt="Sombrero-rojo"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={require("../../assets/images/camisetaBotanica.jpg").default}
              alt="Camiseta-botanica"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={require("../../assets/images/calcetasMesh.jpg").default}
              alt="Calcetas-mesh"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={require("../../assets/images/vestidoLucy.jpg").default}
              alt="Vestido-lucy"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={
                require("../../assets/images/cadenaMapaNicaragua.jpg").default
              }
              alt="Cadena-nic"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={require("../../assets/images/Calcetas.jpg").default}
              alt="Calcetas"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={require("../../assets/images/Cuellos.jpg").default}
              alt="Cuellos"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={require("../../assets/images/Pines.jpg").default}
              alt="Pines"
            />
          </figure>
          <figure className="ms-section__container">
            <img
              className="ms-section__container--img"
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              className="ms-section__container--img product-img"
              src={require("../../assets/images/BrocheEatMe.jpg").default}
              alt="Broche-eatme"
            />
          </figure>
        </div>
      </section>
      {/* FEATURES */}
      <section className="features-section">
        <div className="features-section__container">
          <FaCreditCard className="features-section__container--icon" />
          <h3 className="features-section__container--title">
            Compra segura en línea
          </h3>
          <p className="features-section__container--description">
            Tus datos están protegidos bajo un sistema cifrado
          </p>
        </div>
        <div className="features-section__container">
          <FaGlobeAmericas className="features-section__container--icon" />
          <h3 className="features-section__container--title">
            Envíos internacionales
          </h3>
          <p className="features-section__container--description">
            Hasta tu hogar
          </p>
        </div>
        <div className="features-section__container">
          <BiSupport className="features-section__container--icon" />
          <h3 className="features-section__container--title">
            Soporte técnico 24/7
          </h3>
          <p className="features-section__container--description">
            Personalizado para cada uno de nuestros clientes
          </p>
        </div>
      </section>
      <Footer />
      <ScrollUp />
    </main>
  );
};

export default Home;
