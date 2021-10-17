import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel() {
  return (
    <div className="scroll-banner">
      <FaChevronLeft className="scroll-banner__icon" />
      <figure className="scroll-banner__container">
        <img
          className="scroll-banner__container--img"
          src={require("../assets/images/boinaAmarilla.jpg").default}
          alt="Boina-amarilla"
        />
      </figure>
      <figure className="scroll-banner__container">
        <img
          className="scroll-banner__container--img"
          src={require("../assets/images/ZapatosRosa.jpg").default}
          alt="Zapatos-rosa"
        />
      </figure>
      <figure className="scroll-banner__container">
        <img
          className="scroll-banner__container--img"
          src={require("../assets/images/Mochila.jpg").default}
          alt="Mochila"
        />
      </figure>
      <figure className="scroll-banner__container">
        <img
          className="scroll-banner__container--img"
          src={require("../assets/images/BolsasConchas.jpg").default}
          alt="Bolsas-concha"
        />
      </figure>
      <FaChevronRight className="scroll-banner__icon" />
    </div>
  );
}
