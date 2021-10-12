import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";

const Login = () => {
  return (
    <main className="trick">
      <Header />
      <section className="main-loginsection">
        <SidePanel />
        <div>
          <h1>This is login page</h1>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Login;
