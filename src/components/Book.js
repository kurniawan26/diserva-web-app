import React from "react";
import Fade from "react-reveal/Fade";
import Input from "../elements/Input/Input";
import Radio from "../elements/Radio/Radio";

import featuresJson from "../json/features.json";

export default function Book() {
  return (
    <section className="section-book">
      <Fade top>
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Start booking now</h2>
                </div>

                {featuresJson.input.map((input, index) => {
                  return (
                    <Input
                      key={index}
                      type={input.type}
                      placeholder={input.label}
                      label={input.label}
                      id={input.id}
                    />
                  );
                })}

                <div className="form__group u-margin-bottom-medium">
                  {featuresJson.radio.map((radio, index) => {
                    return (
                      <Radio
                        key={index}
                        id={radio.id}
                        label={radio.label}
                        htmlFor={radio.htmlFor}
                      />
                    );
                  })}
                </div>

                <div className="form__group">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
