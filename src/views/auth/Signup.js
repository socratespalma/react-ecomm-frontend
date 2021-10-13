import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [reminder, setReminder] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !passwd) {
      alert("Please add a valid user");
      return;
    }

    onSignup({ username, email, passwd });

    setUsername("");
    setEmail("");
    setPasswd("");
  };
  return (
    <main className="trick">
      <Header />
      <section className="main-signup-section">
        <SidePanel />
        <section className="signup-section">
          <div className="login form-container">
            <h1> Registrarse </h1>
            <form className="login__form" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  placeholder="Ingrese Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label class="control-label" for="input">
                  Usuario
                </label>
                <i class="bar"></i>
                <i class="input-error">error here</i>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="user@ecomm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label class="control-label" for="input">
                  Correo
                </label>
                <i class="bar"></i>
                <i class="input-error">error here</i>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Ingrese la contraseña"
                  value={passwd}
                  onChange={(e) => setPasswd(e.target.value)}
                  required
                />
                <label class="control-label" for="input">
                  Contraseña
                </label>
                <i class="bar"></i>
                <i class="input-error">error here</i>
              </div>
              <button class="button" type="submit">
                <span>Registrarse</span>
              </button>
            </form>
            <p>
              Al dar click en "Registrarse" estas de acuerdo con los términos y
              condiciones de uso
            </p>
          </div>
          <div className="form-container">
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

Signup.propTypes = {
  onLogin: PropTypes.func,
};

export default Signup;
