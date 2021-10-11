import React from "react";
import { Link } from "react-router-dom";

export default function FooterNavbar() {
  return (
    <nav>
      <p>© 2021 | Amapola Escarlata</p>
      <ul>
        <li>
          <Link to="/privacy-policy">Política de privacidad</Link>
        </li>
        <li>
          <Link to="/terms-of-use">Términos de uso</Link>
        </li>
        <li>
          <Link to="/legal-info">Información legal</Link>
        </li>
        <li>
          <Link to="/about-us">Nosotros</Link>
        </li>
        <li>
          <Link to="/help">Ayuda</Link>
        </li>
      </ul>
    </nav>
  );
}
