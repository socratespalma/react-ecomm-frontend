import React from "react";

export default function SidePanel() {
  return (
    <div className="main-sidepanel">
      <figure className="main-sidepanel__imgcontainer">
        <img
          src={require("../assets/logos/Brand_logo.png").default}
          className="main-sidepanel__img"
          alt="logo"
        />
      </figure>
    </div>
  );
}
