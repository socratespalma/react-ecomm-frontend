import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

// const Signup = ({ onSignup }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [passwd, setPasswd] = useState("");

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !passwd) {
//       alert("Please add a valid user");
//       return;
//     }

//     onSignup({ username, email, passwd });

//     setUsername("");
//     setEmail("");
//     setPasswd("");
//   };

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
          alert("Success");
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
                <span>{registerInput.error_list.name}</span>
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
                  name="email"
                  onChange={handleInput}
                  value={registerInput.email}
                  required
                />
                <span>{registerInput.error_list.email}</span>
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
                  name="password"
                  onChange={handleInput}
                  value={registerInput.password}
                  required
                />
                <span>{registerInput.error_list.password}</span>
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
}

// };

// Signup.propTypes = {
//   onLogin: PropTypes.func,
// };

export default Signup;
