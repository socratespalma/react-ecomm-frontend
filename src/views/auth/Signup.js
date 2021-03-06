import axios from "axios";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <label className="control-label" htmlFor="input">
                  Usuario
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
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
                <label className="control-label" htmlFor="input">
                  Correo
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
                <span>{registerInput.error_list.email}</span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Ingrese la contrase??a"
                  name="password"
                  onChange={handleInput}
                  value={registerInput.password}
                  required
                />
                <label className="control-label" htmlFor="input">
                  Contrase??a
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
                <span>{registerInput.error_list.password}</span>
              </div>
              <button className="button" type="submit">
                <span>Registrarse</span>
              </button>
            </form>
            <p>
              Al dar click en "Registrarse" estas de acuerdo con los t??rminos y
              condiciones de uso
            </p>
          </div>
          <div className="form-container">
            <p>
              ??Ya tienes una cuenta? <Link to="/login">Inicia Sesi??n</Link>
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Signup;
