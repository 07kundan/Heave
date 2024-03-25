import React from "react";

function Floor(props) {
  // setting style of indicator based on it is active or not
  const indicatorColor = props.isActive
    ? "radial-gradient(rgb(0, 178, 0),rgb(0,228,0),rgb(0, 268, 0))"
    : "radial-gradient(rgb(198,0, 0),rgb(228,0,0),rgb(268,0, 0))";
  //----------------------------------------------------------

  const hei =
    window.innerWidth < 1024 // screen width is less than or greater than
      ? (props.screenSize * 80) / 100 + "px" // 80% of height
      : (props.screenSize * 110) / 100 + "px"; //110% of height

  console.log(props.screenSize);
  console.log(hei);
  return (
    <>
      <div
        className={`w-[95%] bg-sky-600 border-2 border-t-1 border-black text-center p-8 relative shadow-sky-800 shadow-inner`}
        style={{ height: hei }}
      >
        <span
          className={`absolute right-3 top-3 h-4 w-4 rounded-full`}
          style={{ backgroundImage: `${indicatorColor}` }}
        ></span>
        <div className="text-2xl w-12 h-12 m-auto flex items-center justify-center bg-slate-400 border border-black rounded-full shadow-inner shadow-slate-700 lg:text-4xl lg:w-16 lg:h-16 ">
          {props.value}
        </div>
      </div>
    </>
  );
}

export default Floor;
