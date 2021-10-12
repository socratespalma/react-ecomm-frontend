import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const Signup = () => {
  return (
    <main className="trick">
      <Header />
      <section className="main-signup-section">
        <SidePanel />
        <section className="signup-section">
          <h1>Registrarse</h1>
          <h2>¿Ya tienes una cuenta? Inicia Sesión</h2>
          <div className="signup-section__form">
            <input type="text" placeholder="Usuario" />
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
          </div>
          <p>
            Al dar click en "Registrarse" estas de acuerdo con los términos y
            condiciones de uso
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Signup;
