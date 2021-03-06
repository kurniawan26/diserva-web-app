import React from "react";
import Fade from "react-reveal/Fade";

import videoMp4 from "../img/video1.mp4";
import videoWebm from "../img/video.webm";

import imgStory1 from "../img/Azhar.png";

export default function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <Fade right>
        <div className="story">
          <figure className="story__shape">
            <img
              src={imgStory1}
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Azhar Luthfi</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best experience ever with Diserva
            </h3>
            <p>
              Saya sangat puas dengan pelayanan pembuatan website dari Diserva
              ini, website yang dibuat sangat user friendly dan mudah untuk di
              operasikan, dan membuat pertumbuhan yang cukup pesat pada
              komunitas Reylie kami
            </p>
          </div>
        </div>
        </Fade>
      </div>

      {/* <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src={imgStory2}
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div> */}

      <div className="u-center-text u-margin-top-huge">
        <a href="#s" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}
