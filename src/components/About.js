import React from "react";
import Fade from "react-reveal/Fade";

import imgNatLarge1 from "../img/design-img1.jpg";
import imgNatLarge2 from "../img/design-img2.jpg";
import imgNatLarge3 from "../img/design-img3.jpg";

import imgNat1 from "../img/nat-1.jpg";
import imgNat2 from "../img/nat-2.jpg";
import imgNat3 from "../img/nat-3.jpg";

export default function About() {
  return (
    <div>
      <Fade left>
        <section className="section-about">
          <Fade bottom delay={1000}>
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Tentang Kami</h2>
            </div>
          </Fade>

          <div className="row">
            <div className="col-1-of-2">
              <Fade left delay={1500}>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Apa itu Diserva?
                </h3>
                <p className="paragraph">
                  Diserva (Digital Servica Agency) partner terbaik untuk bisnis
                  anda, kami menawarkan 4 jasa digital (Web Development, Mobile
                  App Development, Digital Marketing dan Marketing Consulting)
                  untuk membantu digitalisasi usaha kamu
                </p>

                <p className="paragraph">
                  Kabar baik jika kamu pelaku UMKM kami memberikan penawaran
                  khusus langsung aja yuk hubungi kami di kontak yang tersedia
                </p>

                <a href="#tours" className="btn-text">
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </Fade>
            </div>

            <div className="col-1-of-2">
              <Fade right delay={1500}>
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
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
