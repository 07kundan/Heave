import React from "react";
import Button from "./Button";
import { useState } from "react";

function ButtonsBoards({ setFloor, buttonOn }) {
  let noOfButtons = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <div className="w-[80%] h-[80%] p-8 flex flex-wrap justify-center items-center gap-x-5 gap-y-0 bg-slate-600 border-2 border-black shadow-black shadow-inner">
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
