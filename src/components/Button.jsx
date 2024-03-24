import React from "react";
import { useState } from "react";

function Button(props) {
  // it setting button color based on button is on or off
  const toogleColor = () => {
    props.setFloor(props.value); // selecting index of floor that has to change
  };
  //-----------------------------------------------------
  return (
    <button
      className={`h-[25%] w-[25%] text-5xl flex justify-center items-center ${
        props.buttonOn ? "bg-blue-800" : "bg-blue-600"
      } shadow-md shadow-blue-500 rounded-lg `}
      onClick={() => !props.buttonOn && toogleColor()} // It'll call toogleColor only if button is not clicked already means (selected==false)
    >
      {props.value}
    </button>
  );
}

export default Button;
