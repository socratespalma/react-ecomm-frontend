import React from "react";
import FooterNavbar from "./FooterNavbar";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="main-footer">
      <h2 className="main-footer__cta">Contáctenos</h2>
      <section className="social-subsection">
        <a
          target="_blank"
          href="https://www.facebook.com/Amapola-Escarlata-1765011270283166"
          className="social-subsection__anchor"
        >
          <FaFacebook className="social-subsection__icons" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/amapola_escarlata/"
          className="social-subsection__anchor"
        >
          <FaInstagram className="social-subsection__icons" />
        </a>
        <a href="#" className="social-subsection__anchor">
          <FaWhatsapp className="social-subsection__icons" />
        </a>
      </section>
      <FooterNavbar />
    </div>
  );
}
