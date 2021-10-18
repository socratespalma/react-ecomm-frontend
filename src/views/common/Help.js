import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const Help = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="trick">
      <Header />
      <section className="main-help-section">
        <SidePanel />
        <section className="help-section">
          <h3>Ayuda</h3>
          <h4>Preguntas más frecuentes</h4>
          <p>¿Dónde se encuentra ubicada la tienda?</p>
          <p>
            Respuesta: Hasta el momento Amapola Escarlata no cuenta con una
            tienda física, solo cuenta con la venta de ropa y accesorios vintage
            en línea.
          </p>
          <p>¿Cuenta la tienda con algún correo dónde pueda comunicarme?</p>
          <p>
            Respuesta: Amapola Escarlata cuenta con su propio correo
            electrónico, siendo este: amapolaescarlata.arte@gmail.com
          </p>
          <p>¿A qué público está dirigida la tienda?</p>
          <p>
            Respuesta: La tienda está dirigida principalmente para las todas
            aquellas jóvenes interesadas en lucir inigualables, aunque también
            contamos con múltiples accesorios y prendas unisex que te harán
            lucir como nunca antes.
          </p>
          <p>¿La tienda proporciona garantías por los artículos comprados?</p>
          <p>
            Respuesta: Si tú producto comprado presenta fallas, o bien, al
            momento de recibir tú pedido no encuentras lo esperado, te
            realizamos el cambio de este por otro totalmente nuevo.
          </p>
          <p>¿Qué tan seguro resulta comprar en línea?</p>
          <p>
            Respuesta: Amapola Escarlata como un tienda responsable y
            comprometida con sus clientes toma las mayores medidas de seguridad
            a su alcance, pero siempre te recomienda proteger tu equipo con el
            software que consideres más apropiado.
          </p>
          <p>
            Te recomendamos leer también nuestras políticas de privacidad y
            términos de uso.
          </p>
          <p>Cualquier consulta, contáctanos.</p>
        </section>
      </section>

      <Footer />
    </main>
  );
};

export default Help;
