import React from "react";
import Button from "./Button";
import { useState } from "react";

function ButtonsBoards({ setFloor }) {
  let noOfButtons = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <div className="w-[80%] h-[80%] p-8 flex flex-wrap justify-center items-center gap-x-5 gap-y-0 bg-slate-600 border-2 border-black shadow-black shadow-inner">
        {noOfButtons.map((item) => (
          <Button key={item} item={item} setFloor={setFloor} />
        ))}
      </div>
    </>
  );
}

export default ButtonsBoards;
