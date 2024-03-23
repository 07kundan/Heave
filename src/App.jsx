import React, { useEffect, useTransition } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Floor from "./components/floor";
import ButtonsBoards from "./components/ButtonsBoards";

function Layout() {
  // It'll remember the state of indicator, is it active or not
  const [floorIndicators, setFloorIndicators] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  //-----------------------------------------------------------

  const [toVisit, setToVisit] = useState([]);
  const [toGo, setToGo] = useState(0);
  const [timeToReach, setTimeToReach] = useState(0);

  //  it'll determine should indicator will be active or not
  const handleFloorClick = (index) => {
    const newIndicators = [...floorIndicators];
    newIndicators[index] = !newIndicators[index]; // by this we can on and off indicator
    const addingToVisit = [...toVisit];
    addingToVisit.push(index); // pushing floor no to visit
    setToVisit(addingToVisit);
    setFloorIndicators(newIndicators);
    // console.log(index);
  };
  // -----------------------------------------------------------

  // setting animation to visit active floor
  useEffect(() => {
    // console.log(toVisit);
    const value = toVisit[0];
    setToGo(toVisit[0]);
    console.log(toGo);
    // setTimeToReach(value);
    setToVisit((prev) => prev.slice(1));
    // console.log(value);
    // console.log(toVisit);
  }, [floorIndicators]);

  return (
    <>
      <div className="flex">
        <div className="left w-[55vw] bg-yellow-700 flex flex-col items-center p-10 relative">
          {/* lift */}
          <motion.div
            animate={{ y: -588 * toGo }}
            transition={{
              delay: 0.3,
              duration: timeToReach,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="lift z-50 h-[60vh] w-[30%] bg-amber-200 border border-black flex justify-center absolute bottom-12"
          ></motion.div>
          {/* ---------- */}
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
