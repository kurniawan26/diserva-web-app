import React from "react";

export default function Radio(props) {
  return (
    <div className="form__group u-margin-bottom-medium">
      <div className="form__radio-group">
        <input
          type="radio"
          className="form__radio-input"
          id={props.id}
          name="radio-group"
        />
        <label htmlFor={props.id} className="form__radio-label">
          <span className="form__radio-button"></span>
          {props.label}
        </label>
      </div>
    </div>
  );
}
