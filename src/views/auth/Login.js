import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import axios from "axios";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [passwd, setPasswd] = useState("");
//   const [reminder, setReminder] = useState("");

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !passwd) {
//       alert("Please add a valid user");
//       return;
//     }

//     onLogin({ email, passwd, reminder });

//     setEmail("");
//     setPasswd("");
//     setReminder(false);
//   };
function Login() {
  const history = useHistory();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/login`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          alert("Success");
          history.push("/");
        } else if (res.data.status === 401) {
          alert("Error");
        } else {
          setLogin({
            ...loginInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <main className="trick">
      <Header />
      <section className="main-login-section">
        <SidePanel />
        <div className="login-section">
          <div className="login form-container">
            <h1 className="login__title"> Iniciar Sesión </h1>
            <form className="login__form" onSubmit={loginSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="user@ecomm.com"
                  name="email"
                  onChange={handleInput}
                  value={loginInput.email}
                  required
                />
                <span>{loginInput.error_list.email}</span>
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
                  value={loginInput.password}
                  required
                />
                <span>{loginInput.error_list.password}</span>
                <label class="control-label" for="input">
                  Contraseña
                </label>
                <i class="bar"></i>
                <i class="input-error">error here</i>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    // onChange={(e) => setReminder(e.currentTarget.checked)}
                  />
                  <i class="helper"></i>
                  Recordar usuario
                </label>
              </div>
              <button class="button" type="submit">
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
}

// };

// Login.propTypes = {
//   onLogin: PropTypes.func,
// };

export default Login;
