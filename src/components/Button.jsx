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
      className={`h-full w-[100%] text-3xl flex justify-center items-center ${
        props.buttonOn ? "bg-blue-700" : "bg-blue-500"
      } border-2 border-blue-900 rounded-md lg:w-[6vw] lg:h-[6vw]`}
      onClick={() => !props.buttonOn && toogleColor()} // It'll call toogleColor only if button is not clicked already means (selected==false)
    >
      {props.value}
    </button>
  );
}

export default Button;
