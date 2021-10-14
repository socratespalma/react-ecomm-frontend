import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [reminder, setReminder] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !passwd) {
      alert("Please add a valid user");
      return;
    }

    onLogin({ email, passwd, reminder });

    setEmail("");
    setPasswd("");
    setReminder(false);
  };
  return (
    <main className="trick">
      <Header />
      <section className="main-login-section">
        <SidePanel />
        <div className="login-section">
          <div className="login form-container">
            <h1 className="login__title"> Iniciar Sesión </h1>
            <form className="login__form" onSubmit={onSubmit}>
              <div className="has-error form-group">
                <input
                  type="email"
                  placeholder="user@ecomm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="control-label" htmlFor="input">
                  Correo
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Ingrese la contraseña"
                  value={passwd}
                  onChange={(e) => setPasswd(e.target.value)}
                  required
                />
                <label className="control-label" htmlFor="input">
                  Contraseña
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                  />
                  <i className="helper"></i>Recordar usuario
                </label>
              </div>
              <button className="button" type="submit">
                <span>Iniciar Sesión</span>
              </button>
            </form>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div className="form-container">
            <p>
              ¿No tienes una cuenta? <Link to="/signup">Registrate aquí</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
