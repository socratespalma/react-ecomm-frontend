import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import axios from "axios";
import Notiflix from "notiflix";

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
          Notiflix.Notify.success("Inicio de sesión con éxito");
          history.push("/");
        } else if (res.data.status === 401) {
          Notiflix.Notify.failure("Credenciales inválidas");
        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
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

                <label className="control-label" htmlFor="input">
                  Correo
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
                <span>{loginInput.error_list.email}</span>
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

                <label className="control-label" htmlFor="input">
                  Contraseña
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
                <span>{loginInput.error_list.password}</span>
              </div>
              {/* <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                  />
                  <i class="helper"></i>
                  Recordar usuario
                </label>
              </div> */}
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
}

// };

// Login.propTypes = {
//   onLogin: PropTypes.func,
// };

export default Login;
