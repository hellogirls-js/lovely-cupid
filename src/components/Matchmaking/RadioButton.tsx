import React from "react";

import "styles/Button.scss";

export default function RadioButton(props: React.ComponentProps<"input">) {
  return (
    <div className="radio-button">
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{props["aria-label"]}</label>
    </div>
  );
}
