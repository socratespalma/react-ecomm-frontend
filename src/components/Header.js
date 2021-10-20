import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import FloatMenu from "./FloatMenu";
import { FiShoppingBag } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  const wrapperRef = useRef(null);
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  let UserButton = "";

  const onOutsideClick = (ref) => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  const RenderUserButton = (ref) => {
    if (!localStorage.getItem("auth_token")) {
      UserButton = (
        <Link to="/login">
          <FaRegUser className="main-subsection__icons main-subsection__user" />
        </Link>
      );
    } else {
      UserButton = (
        <div ref={ref} onClick={handleToggle}>
          <FaRegUser className="main-subsection__icons main-subsection__user" />
          <FloatMenu active={isActive} />
        </div>
      );
    }
  };

  onOutsideClick(wrapperRef);
  RenderUserButton(wrapperRef);

  useEffect(() => {
    window.scrollTo(0, 0);
    RenderUserButton(wrapperRef);
    onOutsideClick(wrapperRef);
  });

  return (
    <div>
      <section className="main-section">
        <div className="main-section__invisible"></div>
        <Link to="/" className="main-section__logo">
          Amapola Escarlata
        </Link>
        <section className="main-subsection">
          <BiSearch className="main-subsection__icons" />
          {UserButton}
          <FiShoppingBag className="main-subsection__icons" />
        </section>
      </section>
      <HeaderNavbar />
    </div>
  );
}
