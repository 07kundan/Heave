import React from "react";
import { useState } from "react";

function Button(props) {
  const [selected, setSelected] = useState(false);

  const toogleColor = () => {
    props.setFloor(props.item);
    setSelected(!selected);
    // console.log(props.item);
  };
  return (
    <button
      className={`h-[25%] w-[25%] text-5xl flex justify-center items-center ${
        selected ? "bg-blue-800" : "bg-blue-600"
      } shadow-md shadow-blue-500 rounded-lg `}
      onClick={toogleColor}
    >
      {props.item}
    </button>
  );
}

export default Button;
