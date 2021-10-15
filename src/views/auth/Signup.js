import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import Notiflix from "notiflix";

function Signup() {
  const history = useHistory();
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/register`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          Notiflix.Notify.success("Registro de usuario exitoso");
          history.push("/");
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <main className="trick">
      <Header />
      <section className="main-signup-section">
        <SidePanel />
        <section className="signup-section">
          <div className="signup form-container">
            <h1 className="signup__title"> Registrarse </h1>
            <form className="login__form" onSubmit={registerSubmit}>
              <div className="form-group">
                <input
                  placeholder="Ingrese Usuario"
                  name="name"
                  onChange={handleInput}
                  value={registerInput.name}
                  required
                />

                <label class="control-label" for="input">
                  Usuario
                </label>
                <i class="bar"></i>
                <i class="input-error">error here</i>
                <span>{registerInput.error_list.name}</span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="user@ecomm.com"
                  name="email"
                  onChange={handleInput}
                  value={registerInput.email}
                  required
                />

                <label class="control-label" for="input">
                  Correo
                </label>
                <i class="bar"></i>
                <i class="input-error">error here</i>
                <span>{registerInput.error_list.email}</span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Ingrese la contraseña"
                  name="password"
                  onChange={handleInput}
                  value={registerInput.password}
                  required
                />

                <label class="control-label" for="input">
                  Contraseña
                </label>
                <i class="bar"></i>
                <i class="input-error">error here</i>
                <span>{registerInput.error_list.password}</span>
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
}

export default Signup;
