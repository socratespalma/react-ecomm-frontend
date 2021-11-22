import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import Notiflix from "notiflix";
// import axios from "axios";

function Forgot() {
  const [email, setEmail] = useState("");

  const forgotSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/api/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });

    if (response.ok) {
      Notiflix.Notify.success("Correo enviado con éxito");
    } else {
      Notiflix.Notify.failure("Correo inválido");
    }
  };

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
            <h1 className="login__title"> Recuperar contraseña </h1>
            <form className="login__form" onSubmit={forgotSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="user@ecomm.com"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="control-label" htmlFor="input">
                  Correo
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

export default Forgot;
