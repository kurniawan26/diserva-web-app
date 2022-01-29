import React from "react";

export default function Input(props) {
  return (
    <div className="form__group">
      <input
        type={props.type}
        className="form__input"
        placeholder={props.placeholder}
        id={props.id}
        required
      />
      <label htmlFor="name" className="form__label">
        {props.label}
      </label>
    </div>
  );
}
