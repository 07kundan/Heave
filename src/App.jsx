import React, { useEffect, useTransition } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Floor from "./components/floor";
import ButtonsBoards from "./components/ButtonsBoards";
let previouslyVisitedFloor;
let TurnOffButton;

function Layout() {
  // state for button
  const [buttonOn, setButtonOn] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
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
  const [delay, setDelay] = useState(0.3);
  // const [screenSize, setScreenSize] = useState(588);

  const handleFloorClick = (index) => {
    // updating array of floor indicator
    const newIndicators = [...floorIndicators];
    newIndicators[index] = !newIndicators[index]; // by this we can on and off indicator
    // ---------------------------------
    // adding clicked floor to toVisit array
    const addingToVisit = [...toVisit];
    addingToVisit.push(index); // pushing floor no to visit
    // ---------------------------------

    // updating buttonOn array
    const newButtonOn = [...buttonOn];
    newButtonOn[index] = !newButtonOn[index];
    // ---------------------------------

    setButtonOn(newButtonOn);
    setToVisit(addingToVisit);
    setFloorIndicators(newIndicators);
    // console.log(toVisit);
  };
  // -----------------------------------------------------------

  const handleButton = (index) => {
    const newButtonOn = [...buttonOn];
    newButtonOn[index] = false;
    setButtonOn(newButtonOn);
    const newIndicators = [...floorIndicators];
    newIndicators[index] = !newIndicators[index]; // by this we can on and off indicator
    setFloorIndicators(newIndicators);
    setToVisit((prev) => prev.slice(1));
    toVisit[1] ? setDelay(2) : setDelay(0.3);
    console.log(toVisit.length);
  };

  // setting animation to visit active floor

  useEffect(() => {
    if (toVisit.length > 0) {
      if (!previouslyVisitedFloor) {
        previouslyVisitedFloor = 0;
      }
      setToGo(toVisit[0]);
      setTimeToReach(Math.abs(toVisit[0] - previouslyVisitedFloor));
      previouslyVisitedFloor = toVisit[0];
      TurnOffButton = toVisit[0];
    }
  }, [toVisit]);

  return (
    <>
      <div className="flex">
        <div className="left w-[55vw] bg-yellow-700 flex flex-col items-center p-10 relative">
          {/* lift */}
          <motion.div
            animate={{ y: -588 * toGo }}
            transition={{
              delay: delay,
              duration: timeToReach,
              ease: [0.45, 0, 0.55, 1],
            }}
            onAnimationComplete={() => handleButton(TurnOffButton)}
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
          <ButtonsBoards
            setFloor={(index) => handleFloorClick(index)}
            buttonOn={buttonOn}
          />
        </div>
      </div>
    </>
  );
}

export default Layout;
