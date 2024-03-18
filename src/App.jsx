import React from "react";
import { useState } from "react";
import Floor from "./components/floor";
import ButtonsBoards from "./components/ButtonsBoards";

function Layout() {
  const [floorIndicators, setFloorIndicators] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleFloorClick = (index) => {
    const newIndicators = [...floorIndicators];
    newIndicators[index] = !newIndicators[index];
    setFloorIndicators(newIndicators);
    console.log(index);
  };

  return (
    <>
      <div className="flex">
        <div className="left w-[55vw] bg-yellow-700 flex flex-col items-center p-10 relative">
          <div className="lift z-50 h-[60vh] w-[30%] bg-amber-200 border border-black absolute left-1/2 -translate-x-1/2 bottom-12"></div>
          <Floor value={5} isActive={floorIndicators[5]} />
          <Floor value={4} isActive={floorIndicators[4]} />
          <Floor value={3} isActive={floorIndicators[3]} />
          <Floor value={2} isActive={floorIndicators[2]} />
          <Floor value={1} isActive={floorIndicators[1]} />
          <Floor value={0} isActive={floorIndicators[0]} />
        </div>

        <div className="right w-[45vw] h-screen flex items-center justify-center fixed right-0">
          <ButtonsBoards setFloor={(index) => handleFloorClick(index)} />
        </div>
      </div>
    </>
  );
}

export default Layout;
