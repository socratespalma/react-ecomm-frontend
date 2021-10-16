import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="trick">
      <Header />
      <section className="main-pp-section">
        <SidePanel />
        <section className="pp-section">
          <h3>Políticas de privacidad</h3>
          <p>
            En Amapola Escarlata usted es lo que más importa, por lo mismo nos
            esforzamos por la transparencia en nuestras interacciones con usted,
            buscamos que sus experiencias en la tienda en línea con nosotros
            sean eficientes y tan personalizadas como sea posible. Para
            conseguir esto, le aseguramos que la información que obtenemos de
            usted o sobre usted nos ayuda a comprenderlo mejor y mejorar sus
            compras y otras experiencias con nosotros.
          </p>

          <h4>Tipo de información recopilada</h4>
          <p>
            Cuando crea una cuenta, recopilamos su dirección de correo
            electrónico, nombre de usuario y contraseña. Si nos lo proporciona,
            también podemos recopilar información adicional de usted, incluyendo
            su nombre, fecha de nacimiento (día y mes), dirección física, código
            postal, número de teléfono.
          </p>

          <p>
            También le pediremos que proporcione su información de pago (tarjeta
            de crédito, tarjeta de débito u otro método de pago).
          </p>

          <h4>¿En qué utilizamos su información?</h4>
          <p>
            - Para proporcionarle Servicios (incluso para cumplir con sus
            pedidos). - Para comunicarse con usted por correo electrónico,
            mensajes de texto, u otros medios y dispositivos con respecto a su
            cuenta, sus compras (incluida, entre otras, información relacionada
            con la entrega o el envío), sus devoluciones o su otros usos de
            nuestros servicios. - Para responder a sus consultas, resolver sus
            problemas e inquietudes, y para otros fines de servicio al cliente.
            - Para distinguirlo de otros usuarios de nuestros sitios.
          </p>
          <h4>Servicios interactivos</h4>
          <p>
            Es posible que de vez en cuando le brindemos servicios interactivos
            en nuestro sitio. Por ejemplo, podemos permitirle dejar comentarios
            de nuestros productos.
          </p>

          <p>
            El uso de cualquiera de nuestros servicios interactivos por parte de
            un menor está sujeto al consentimiento de sus padres o tutores. Al
            enviar cualquier contenido a nuestro sitio o/a través de nuestros
            servicios interactivos, usted acepta que tendremos un derecho y
            licencia no exclusivos, perpetuos, libres de regalías para usar,
            reproducir, distribuir y poner a disposición dicho contenido en
            nuestro sitio y en nuestros materiales de marketing De vez en
            cuando, si lo consideramos apropiado, podemos moderar cualquier
            servicio interactivo proporcionado en nuestro sitio. Sin embargo, no
            tenemos la obligación de hacerlo. La moderación puede llevarse a
            cabo de forma automática y / o manual, por nosotros o por un tercero
            en nuestro nombre.
          </p>

          <p>
            Cualquier contenido publicado en nuestro sitio por los usuarios a
            través de cualquier servicio interactivo no necesariamente refleja
            las opiniones, opiniones, valores o ideales de Amapola Escarlata o
            de nuestro personal.
          </p>

          <p>
            Excluimos expresamente nuestra responsabilidad por cualquier pérdida
            o daño que surja del uso de cualquier servicio interactivo por parte
            de un usuario en contravención de estos Términos de uso, ya sea que
            el servicio sea moderado o no.
          </p>

          <p>
            Si desea quejarse de la información o materiales cargados en nuestro
            sitio por otros usuarios, contáctenos.
          </p>
          <h4>Derechos de propiedad intelectual</h4>
          <p>
            Todos los derechos de propiedad intelectual en nuestro sitio, y en
            el material publicado en él, son de nuestra propiedad.
          </p>

          <p>Todos los derechos están reservados</p>
        </section>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
