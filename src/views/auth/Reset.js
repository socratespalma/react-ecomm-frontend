import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

function Reset() {
  // TODO: Falta hacer metodo axios y ver como usar token, password y password_confirm

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="trick">
      <Header />
      <section className="main-login-section">
        <SidePanel />
        <div className="login-section">
          <div className="login form-container">
            <h1 className="login__title"> Cambiar contraseña </h1>
            <form className="login__form">
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Ingrese la contraseña"
                  name="password"
                  required
                />
                <label className="control-label" htmlFor="input">
                  Contraseña
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
                <span></span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Ingrese la contraseña de nuevo"
                  name="password-confirm"
                  required
                />
                <label className="control-label" htmlFor="input">
                  Confirmar contraseña
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
                <span></span>
              </div>
              <button className="button" type="submit">
                <span>Enviar</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Reset;
