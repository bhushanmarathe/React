import React from "react";
import "./App";

const ColorSwitch = (props) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        props.onChangeColor();
      }}
    >
      Color change
    </button>
  );
};

export default ColorSwitch;
