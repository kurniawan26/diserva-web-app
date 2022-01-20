import React from "react";


import imgLogoSmall1 from "../img/logo-small-1x.png";
import imgLogoSmall2 from "../img/logo-small-1x.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${imgLogoSmall1} 1x, ${imgLogoSmall2} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${imgLogoSmall1} 1x`}
            alt="Full logo"
            src={imgLogoSmall1}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#company" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#careers" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#privacy" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#terms" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Diserva &copy; 2022 Copyright All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
