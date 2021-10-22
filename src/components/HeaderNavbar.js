import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNavbar() {
  return (
    <nav className="header-nav">
      <ul>
        <li className="header-nav__li">
          <NavLink
            to="/products"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Vestidos
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/sombreros"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Sombreros
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/mochilas"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Mochilas
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/carteras"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Carteras
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/faldas"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Faldas
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/calzado"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Calzado
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/accesorios"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Accesorios
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/camisas"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Camisas
          </NavLink>
        </li>
        <li className="header-nav__li">
          <NavLink
            to="/medias"
            className="header-nav__li--nl"
            activeClassName="active"
          >
            Medias
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
