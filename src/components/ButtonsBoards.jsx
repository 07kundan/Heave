import React from "react";
import Button from "./Button";
import { useState } from "react";

function ButtonsBoards({ setFloor, buttonOn }) {
  let noOfButtons = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <div className="w-[80%] h-[60%] flex flex-col-reverse items-center gap-3 p-2 py-4 bg-slate-600 border-2 border-black shadow-black shadow-inner rounded-2xl lg:p-4 lg:h-[300px] lg:w-[200px] lg:flex lg:flex-col lg:flex-wrap lg:justify-center lg:gap-2 lg:">
        {noOfButtons.map((item) => (
          <Button
            key={item}
            value={item}
            setFloor={setFloor}
            buttonOn={buttonOn[item]}
          />
        ))}
      </div>
    </>
  );
}

export default ButtonsBoards;
