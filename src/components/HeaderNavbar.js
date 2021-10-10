import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">Vestidos</Link>
        </li>
        <li>
          <Link to="">Sombreros</Link>
        </li>
        <li>
          <Link to="">Mochilas</Link>
        </li>
        <li>
          <Link to="">Carteras</Link>
        </li>
        <li>
          <Link to="">Faldas</Link>
        </li>
        <li>
          <Link to="">Calzado</Link>
        </li>
        <li>
          <Link to="">Accesorios</Link>
        </li>
        <li>
          <Link to="">Camisas</Link>
        </li>
        <li>
          <Link to="">Medias</Link>
        </li>
      </ul>
    </nav>
  );
}
