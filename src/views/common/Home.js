import React, { useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCreditCard,
  FaGlobeAmericas,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollUp from "../../components/ScrollUp";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="trick">
      <Header />
      {/* HERO VIDEO */}
      <section className="video-section">
        <h1>Video goes here...</h1>
      </section>
      {/* SLOGAN */}
      <section className="slogan-section">
        <p className="slogan-section__text">
          Prendas y accesorios vintage, con un toque único y especial.
        </p>
      </section>
      {/* NOVEDADES (Component) */}
      <section className="news-section">
        <h1 className="news-section__title">Novedades</h1>
        <div className="scroll-banner">
          <FaChevronLeft />
          <figure>
            <img
              src={require("../../assets/images/boinaAmarilla.jpg").default}
              alt="Boina-amarilla"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/ZapatosRosa.jpg").default}
              alt="Zapatos-rosa"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/Mochila.jpg").default}
              alt="Mochila"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/BolsasConchas.jpg").default}
              alt="Bolsas-concha"
            />
          </figure>
          <FaChevronRight />
        </div>
      </section>
      {/* LO MAS BUSCADO (Component) */}
      <section>
        <h1>Lo más buscado</h1>
        <div className="home__grid">
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={
                require("../../assets/images/sombreroclasicoRojo.jpg").default
              }
              alt="Sombrero-rojo"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={require("../../assets/images/camisetaBotanica.jpg").default}
              alt="Camiseta-botanica"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={require("../../assets/images/calcetasMesh.jpg").default}
              alt="Calcetas-mesh"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={require("../../assets/images/vestidoLucy.jpg").default}
              alt="Vestido-lucy"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={
                require("../../assets/images/cadenaMapaNicaragua.jpg").default
              }
              alt="Cadena-nic"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={require("../../assets/images/Calcetas.jpg").default}
              alt="Calcetas"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={require("../../assets/images/Cuellos.jpg").default}
              alt="Cuellos"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={require("../../assets/images/Pines.jpg").default}
              alt="Pines"
            />
          </figure>
          <figure>
            <img
              src={require("../../assets/images/fondoamapolas.jpg").default}
              alt="Fondo-amapolas"
            />
            <img
              src={require("../../assets/images/BrocheEatMe.jpg").default}
              alt="Broche-eatme"
            />
          </figure>
        </div>
      </section>
      {/* FEATURES */}
      <section className="features-section">
        <div>
          <FaCreditCard />
          <h2>Compra segura en línea</h2>
          <h3>Tus datos estan protegidos bajo un sistema encriptado</h3>
        </div>
        <div>
          <FaGlobeAmericas />
          <h2>Envíos internacionales</h2>
          <h3>Hasta tu hogar</h3>
        </div>
        <div>
          <BiSupport />
          <h2>Soporte técnico 24/7</h2>
          <h3>Personalizado para cada uno de nuestros clientes</h3>
        </div>
      </section>
      <Footer />
      <ScrollUp />
    </main>
  );
};

export default Home;
