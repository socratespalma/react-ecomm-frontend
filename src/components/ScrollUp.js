import React from "react";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className={`scrollup ${visible ? "show-scroll" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="scrollup__icon" />
    </div>
  );
};

export default ScrollUp;
