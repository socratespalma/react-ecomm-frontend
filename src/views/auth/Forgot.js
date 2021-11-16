import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import axios from "axios";
import Notiflix from "notiflix";

function Forgot() {
  const [forgotInput, setForgot] = useState({
    email: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setForgot({ ...forgotInput, [e.target.name]: e.target.value });
  };

  const forgotSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: forgotInput.email,
    };

    // axios
    //   .post("forgot", data)
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // TODO: Falta testear metodo de axios y hacer endpoint en laravel

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/forgot`, data).then((res) => {
        if (res.data.status === 200) {
          Notiflix.Notify.success("Correo enviado con éxito");
        } else if (res.data.status === 401) {
          Notiflix.Notify.failure("Correo inválido");
        } else {
          setForgot({ ...forgotInput, error_list: res.data.validation_errors });
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
            <h1 className="login__title"> Recuperar contraseña </h1>
            <form className="login__form" onSubmit={forgotSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="user@ecomm.com"
                  name="email"
                  onChange={handleInput}
                  value={forgotInput.email}
                  required
                />
                <label className="control-label" htmlFor="input">
                  Correo
                </label>
                <i className="bar"></i>
                <i className="input-error">error here</i>
                <span>{forgotInput.error_list.email}</span>
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
