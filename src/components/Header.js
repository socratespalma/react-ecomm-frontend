import React from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  return (
    <div>
      <section>
        <div></div>
        <Link to="/">Amapola Escarlata</Link>
        <section>
          <FiSearch />
          <Link to="/login">
            <FiUser />
          </Link>

          <FiShoppingBag />
        </section>
      </section>
      <HeaderNavbar />
    </div>
  );
}
