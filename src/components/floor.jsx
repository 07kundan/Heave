import React from "react";

function Floor(props) {
  const indicatorColor = props.isActive ? "bg-green-500" : "bg-red-500";
  return (
    <>
      <div
        className={`w-[75%] h-[100vh] bg-purple-400 border-2 border-t-0 border-black text-center p-8 shadow-md shadow-black relative`}
      >
        <span
          className={`absolute right-3 top-3 h-4 w-4 rounded-full ${indicatorColor}`}
        ></span>
        <div className="text-4xl w-14 h-14 m-auto flex items-center justify-center bg-white border border-black rounded-full shadow-md shadow-black">
          {props.value}
        </div>
      </div>
    </>
  );
}

export default Floor;
