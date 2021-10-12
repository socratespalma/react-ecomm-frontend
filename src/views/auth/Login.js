import React from "react";
import { useState } from "react";
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
      <section className="main-loginsection">
        <SidePanel />
        <div className="login-section">
          <h1> This is login page </h1>
          <form className="login-form" onSubmit={onSubmit}>
            <div className="form-control">
              <label> Correo </label>
              <input
                type="email"
                placeholder="user@ecomm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label> Contraseña </label>
              <input
                type="password"
                placeholder="Ingrese la contraseña"
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
                required
              />
            </div>
            <div className="form-control form-control-check">
              <label> Recordar usuario </label>
              <input
                type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
              />
            </div>
            <input
              type="submit"
              value="Iniciar Sesión"
              className="btn btn-block"
            />
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Login;
