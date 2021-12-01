import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import Notiflix from "notiflix";

function Reset(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const resetSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/api/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: props.match.params.token,
        password,
        password_confirm: passwordConfirm,
      }),
    });

    if (response.ok) {
      Notiflix.Notify.success("Cambio de contraseña exitoso");
      setRedirect(true);
    } else {
      Notiflix.Notify.failure("Error");
    }
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <main className="trick">
      <Header />
      <section className="main-login-section">
        <SidePanel />
        <div className="login-section">
          <div className="login form-container">
            <h1 className="login__title"> Cambiar contraseña </h1>
            <form className="login__form" onSubmit={resetSubmit}>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Ingrese la contraseña"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setPasswordConfirm(e.target.value)}
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
