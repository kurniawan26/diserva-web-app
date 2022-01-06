import React from "react";

import imgNatLarge1 from "../img/nat-1-large.jpg";
import imgNatLarge2 from "../img/nat-2-large.jpg";
import imgNatLarge3 from "../img/nat-3-large.jpg";

import imgNat1 from "../img/nat-1.jpg";
import imgNat2 from "../img/nat-2.jpg";
import imgNat3 from "../img/nat-3.jpg";

export default function About() {
  return (
    <div>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>

            <a href="#tours" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                srcSet={`${imgNat1} 300w, ${imgNatLarge1} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Nature 1"
                className="composition__photo composition__photo--p1"
                src={imgNatLarge1}
              />

              <img
                srcSet={`${imgNat2} 300w, ${imgNatLarge2} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Nature"
                className="composition__photo composition__photo--p2"
                src={imgNatLarge2}
              />

              <img
                srcSet={`${imgNat3} 300w, ${imgNatLarge3} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Nature"
                className="composition__photo composition__photo--p3"
                src={imgNatLarge3}
              />

              {/* <!--
                            <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1">
                            <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2">
                            <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3">
                            --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
