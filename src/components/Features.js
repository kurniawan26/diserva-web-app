import React from "react";
import Fade from "react-reveal/Fade";

import featuresJson from "../json/features.json";

export default function Features() {
  return (
    <section className="section-features" ref={featuresJson}>
      <div className="row">
        {featuresJson.features.map((feature, index) => {
          return (
            <div className="col-1-of-4" key={index}>
              <Fade bottom delay={200 * index}>
                <div className="feature-box feature">
                  <i className="feature-box__icon icon-basic-world"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    {feature.heading}
                  </h3>
                  <p className="feature-box__text">{feature.description}</p>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
