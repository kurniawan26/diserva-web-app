import React from "react";
import Fade from "react-reveal/Fade";

export default function Tours() {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular Service</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <Fade bottom delay={300}>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Marketing consulting
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Support marketing</li>
                  <li>Planning business</li>
                  <li>Monitoring business</li>
                  <li>Evaluating business</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  {/* <p className="card__price-only">Tertarik</p>
                  <p className="card__price-value">$297</p> */}
                  <a href="#popup" className="btn btn--white">
                    Get Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        </div>

        <div className="col-1-of-3">
          <Fade bottom delay={600}>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  Digital Marketing
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Social media handling </li>
                  <li>Manage content by expert</li>
                  <li>Strategist marketing plan </li>
                  <li>Specialist in big social media</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  {/* <p className="card__price-only">Tertarik</p>
                  <p className="card__price-value">$497</p> */}
                <a href="#popup" className="btn btn--white">
                  Get Now!
                </a>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        </div>

        <div className="col-1-of-3">
          <Fade bottom delay={900}>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  Web / Mobile Development
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Free 6 Bulan Perawatan</li>
                  <li>UI/UX Friendly</li>
                  <li>SEO Support</li>
                  <li>Content Support</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  {/* <p className="card__price-only">Tertarik</p>
                  <p className="card__price-value">$897</p> */}
                <a href="#popup" className="btn btn--white">
                  Get now!
                </a>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#blank" className="btn btn--green">
          Discover all Services
        </a>
      </div>
    </section>
  );
}
