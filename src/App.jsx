import React, { useEffect, useTransition } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Floor from "./components/floor";
import ButtonsBoards from "./components/ButtonsBoards";
let previouslyVisitedFloor = 0;
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
  const [screenSize, setScreenSize] = useState(window.innerHeight);
  console.log(screenSize);
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

    if (index != previouslyVisitedFloor) {
      setButtonOn(newButtonOn);
      setToVisit(addingToVisit);
      setFloorIndicators(newIndicators);
    }
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
    // console.log(toVisit.length);
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
        <div className="left w-[73vw] bg-cyan-900 flex flex-col gap-1 items-center p-2 border-2 border-black relative lg:w-[50vw] lg:p-8">
          {/* lift */}
          <motion.div
            className="lift z-50 h-[53vh] w-[75%] bg-cyan-300 border-8 border-slate-900 flex justify-center absolute bottom-5 lg:w-[42%] lg:h-[75vh] lg:bottom-12"
            animate={{
              y:
                window.innerWidth < 1024
                  ? -((screenSize - (screenSize * 20) / 100) * toGo) - toGo * 4
                  : -(((screenSize * 110) / 100) * toGo) - toGo * 4, // 4 is a value of gap-1 between every floor
            }}
            transition={{
              delay: delay,
              duration: timeToReach,
              ease: [0.45, 0, 0.55, 1],
            }}
            onAnimationComplete={() => handleButton(TurnOffButton)}
          ></motion.div>
          {/* ---------- */}
          <Floor
            value={5}
            isActive={floorIndicators[5]}
            screenSize={screenSize}
          />
          <Floor
            value={4}
            isActive={floorIndicators[4]}
            screenSize={screenSize}
          />
          <Floor
            value={3}
            isActive={floorIndicators[3]}
            screenSize={screenSize}
          />
          <Floor
            value={2}
            isActive={floorIndicators[2]}
            screenSize={screenSize}
          />
          <Floor
            value={1}
            isActive={floorIndicators[1]}
            screenSize={screenSize}
          />
          <Floor
            value={0}
            isActive={floorIndicators[0]}
            screenSize={screenSize}
          />
        </div>

        <div className="w-[27vw] h-screen flex items-center justify-center fixed right-0 lg:w-[50vw]">
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
