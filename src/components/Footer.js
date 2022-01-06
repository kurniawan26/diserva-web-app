import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcSet="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
            alt="Full logo"
            src="img/logo-green-2x.png"
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
