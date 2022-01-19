import React from "react";

import logo from "../img/logo-white.png"

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Diserva</span>
          <span className="heading-primary--sub">Partner tepat untuk menjangkau Target Market anda </span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Pelajari Layanan Kami
        </a>
      </div>
    </header>
  );
}
