import React from "react";
import { useState } from "react";

function Button(props) {
  const [selected, setSelected] = useState(false);

  // it setting button color based on button is on or off
  const toogleColor = () => {
    props.setFloor(props.item); // selecting index of floor that has to change
    setSelected(!selected); // it can turn on or off the button
    // console.log(props.item);
  };
  //-----------------------------------------------------
  return (
    <button
      className={`h-[25%] w-[25%] text-5xl flex justify-center items-center ${
        selected ? "bg-blue-800" : "bg-blue-600"
      } shadow-md shadow-blue-500 rounded-lg `}
      onClick={() => !selected && toogleColor()} // It'll call toogleColor only if button is not clicked already means (selected==false)
    >
      {props.item}
    </button>
  );
}

export default Button;
