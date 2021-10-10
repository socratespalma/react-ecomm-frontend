import React from "react";
import FooterNavbar from "./FooterNavbar";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <h2>Contáctenos</h2>
      <section>
        <FaFacebookF />
        <FaInstagram />
        <FaWhatsapp />
      </section>
      <FooterNavbar />
    </div>
  );
}
