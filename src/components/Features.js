import React from "react";

export default function Features() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Professionality
            </h3>
            <p className="feature-box__text">
              Menjunjung tinggi Profesionalitas dalam mengerjakan segala macam
              projek yang masuk ke Diserva
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              UMKM First
            </h3>
            <p className="feature-box__text">
              Mengedepankan pengembangan usaha UMKM sebagai bentuk komitment
              dalam membantu perekoniam yang bebasis kerakyatan di Indonesia
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Creative</h3>
            <p className="feature-box__text">
              Kita mendesain website dan aplikasi secara kreatif untuk
              memunculkan nilai cerita yang nyaman untuk digunakan oleh para
              pelanggan
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Social Impact
            </h3>
            <p className="feature-box__text">
              Diserva berkomitmen untuk tidak hanya mencari profit margin dari
              bisnis, tetapi juga berusaha untuk memberikan dampak sosial,
              sebagai bentuk wujud nyata dalam kontribusi untuk menolong
              masyarakat secara luas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
