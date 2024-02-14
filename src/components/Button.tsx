import React from "react";
import "styles/Button.scss";

export default function Button(props: React.ComponentProps<"button">) {
  return (
    <button className="navButton" {...props}>
      {props["aria-label"]}
    </button>
  );
}
