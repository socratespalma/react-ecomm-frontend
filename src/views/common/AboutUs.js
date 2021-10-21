import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AboutUs = () => {
  return (
    <main className="trick">
      <Header />
      <div className="about">
        {/* Quienes somos */}

        <div className="about__section">
          <img
            className="about__img"
            src={require("../../assets/images/zapatosCrema.jpg").default}
            alt="zapatos"
          />
          <div className="about__data">
            <h2 className="about__title">¿Quiénes somos?</h2>
            <hr />
            <p className="about__text">
              ¡Somos todo lo que necesitas!
              <br />
              Una tienda con estilo fresco y original, donde encontrarás tú
              estilo ideal. Deposita tú confianza en nosotros y lucirás como
              nunca antes.
            </p>
          </div>
        </div>

        <div className="about__wrap">
          {/* Nuestros Valores */}
          <div className="about__section">
            <img
              className="about__img"
              src={require("../../assets/images/vestidoPaula.jpg").default}
              alt="vestidos"
            />
            <div className="about__data">
              <h2 className="about__title">¡Valores que nos distinguen!</h2>
              <hr />
              <ul>
                <li>Responsabilidad</li>
                <li>Compromiso</li>
                <li>Entrega</li>
              </ul>
            </div>
          </div>
          {/* Nuestra Filosofia */}
          <div className="about__section">
            <img
              className="about__img"
              src={require("../../assets/images/Camisa.jpg").default}
              alt="camisas"
            />
            <div className="about__data">
              <h2 className="about__title">Nuestra filosofía</h2>
              <hr />
              <p className="about__text">
                Nuestro mayor propósito es ayudarte a encontrar tú brillo
                interior
              </p>
            </div>
          </div>
        </div>

        {/* Se parte... */}

        <div className="about__section">
          <img
            className="about__img"
            src={
              require("../../assets/images/camisetaNocheEstrellada.jpg").default
            }
            alt="camisetas"
          />
          <div className="about__data">
            <h2 className="about__title">
              ¡Ven y sé parte de nuestra familia!
            </h2>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
