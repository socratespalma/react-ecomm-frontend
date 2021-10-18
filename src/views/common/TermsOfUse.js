import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="trick">
      <Header />
      <section className="main-tou-section">
        <SidePanel />
        <section className="tou-section">
          <h3>Términos de uso</h3>

          <p>
            Estos términos de uso, junto con las políticas establecen las reglas
            para nuestro sitio, ya sea como invitado o como usuario registrado.
          </p>
          <p>
            El uso de nuestro sitio incluye acceder, navegar, comprar o
            registrarse para usarlo. Lea estos términos de uso detenidamente
            antes de comenzar, ya que al navegar en él, confirma que acepta
            cumplirlos. Si no está de acuerdo, no debe usarlo.
          </p>
          <h4>Su uso de nuestro sitio</h4>
          <p>Puede utilizar nuestro sitio únicamente con fines legales.</p>
          <p>
            No puede usar nuestro sitio:
            <br />
            - De cualquier manera que viole cualquier ley, regulación o código
            de práctica local, nacional o internacional aplicable;
            <br />
            - De cualquier manera que sea ilegal o fraudulenta, o que tenga un
            propósito o efecto ilegal o fraudulento;
            <br />- De cualquier manera que infrinja cualquier derecho de
            propiedad intelectual o derecho a la privacidad.
          </p>
          <h4>Estándares de contenido</h4>
          <p>
            Debe asegurarse de que toda la información y el material que
            publique en nuestro sitio (Contenido del usuario) y el uso de los
            servicios interactivos asociados con él cumplan con los siguientes
            estándares.
          </p>
          <p>
            El contenido del usuario debe ser exacto (donde se exponen los
            hechos), ser genuinamente sostenido (donde se expresan opiniones) y
            cumplir con la ley aplicable en cualquier país desde el que se
            publique. El contenido del usuario no debe:
          </p>
          <p>
            - Contener cualquier material que sea difamatorio de cualquier
            persona, obsceno, ofensivo, odioso, malicioso o inflamatorio o que
            promueva la violencia o la discriminación por motivos de raza, sexo,
            religión, nacionalidad, discapacidad, orientación sexual o edad;
            <br />
            <br />
            - Infringir cualquier derecho de propiedad intelectual de cualquier
            otra persona;
            <br />
            <br />
            - Ser amenazante, abusivo o invadir la privacidad de otra persona, o
            causar molestias, inconvenientes o ansiedad innecesaria o puede
            acosar, molestar, avergonzar, alarmar o molestar a cualquier otra
            persona;
            <br />
            <br />
            - Divulgar el nombre, dirección, número de teléfono, dirección de
            correo electrónico o cualquier otro dato personal con respecto a
            cualquier otra persona;
            <br />
            <br />
            - Dar la impresión de que emana de nosotros, si este no es el caso;
            <br />
            <br />- Abogar, promover o ayudar a cualquier actividad o acto
            ilegal.
          </p>
          <p>
            Determinaremos, a nuestro criterio, si ha habido una violación de
            estos estándares de contenido a través de su uso de nuestro sitio.
          </p>
          <p>
            Cuando se produce una violación de estos estándares de contenido,
            podemos tomar las medidas que consideremos apropiadas y reservarnos
            el derecho de rechazar la publicación de dicho contenido de usuario
            o eliminar dicho contenido de usuario de nuestro sitio.
          </p>
          <h4>Virus, piratería y otros delitos</h4>
          <p>
            No garantizamos que nuestro sitio sea seguro o esté libre de errores
            o virus. Usted es responsable de configurar su tecnología de
            información, programas informáticos y plataforma para acceder a
            nuestro sitio. Debe usar su propio software de protección antivirus.
            No debe hacer un mal uso de nuestro sitio introduciendo a sabiendas
            virus, troyanos, gusanos, bombas lógicas u otro material malicioso o
            tecnológicamente dañino. No debe intentar obtener acceso no
            autorizado a nuestro sitio, al servidor en el que está almacenado
            nuestro sitio ni a ningún servidor, computadora o base de datos
            conectado a el. No debe atacar nuestro sitio a través de un ataque
            de denegación de servicio o un ataque distribuido de denegación de
            servicio. Al incumplir esta disposición, usted cometería un delito
            penal. Informaremos de tal incumplimiento a las autoridades
            policiales pertinentes y cooperaremos con esas autoridades al
            revelarles su identidad. En caso de incumplimiento, su derecho a
            usar nuestro sitio cesará de inmediato.
          </p>
          <h4>Nuestras marcas están registradas</h4>
          <p>
            El logotipo de esta marca y la misma, ya se encuentra registrado.
            <br />
            No está autorizado a utilizar la misma sin nuestra aprobación.
          </p>
        </section>
      </section>

      <Footer />
    </main>
  );
};

export default TermsOfUse;
