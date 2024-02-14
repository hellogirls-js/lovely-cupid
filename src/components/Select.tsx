import { IconHeart } from "@tabler/icons-react";
import React from "react";
import "styles/Select.scss";

type SelectProps = {
  label: string;
  placeholder?: string;
  options: Array<{
    value: string;
    label: string;
    icon?: any;
  }>;
} & React.ComponentProps<"select">;

export default function Select(props: SelectProps) {
  return (
    <div className="select-container">
      <label className="select-label" id={`select-label-${props.label}`}>
        <div className="label-name">{props.label}</div>
      </label>
      <select
        ref={props.ref}
        className="selectbox"
        aria-labelledby={`select-label-${props.label}`}
        onChange={props.onChange}
      >
        {props.placeholder && <option>{props.placeholder}</option>}
        {props.options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.icon} {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
