import React from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import { FiShoppingBag } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <section className="main-section">
        <div className="main-section__invisible"></div>
        <Link to="/" className="main-section__logo">
          Amapola Escarlata
        </Link>
        <section className="main-subsection">
          <BiSearch className="main-subsection__icons" />
          <Link to="/login">
            <FaRegUser className="main-subsection__icons main-subsection__user" />
          </Link>
          <FiShoppingBag className="main-subsection__icons" />
        </section>
      </section>
      <HeaderNavbar />
    </div>
  );
}
