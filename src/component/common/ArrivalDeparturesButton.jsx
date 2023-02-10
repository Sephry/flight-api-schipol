import React, { useState } from "react";

function ArrivalDeparturesButton({ setArrival }) {

  const buttonActiveHandler = (isTrue) => {
    setArrival(isTrue);
  };

  return (
    <div className="flex flex-row justify-center gap-4 items-center p-4 w-4/5 ">
      <button
        className="flex w-40 h-8 rounded-2xl border-[#141251] font-semibold justify-center items-center"
        style={{
          background: "none",
          outline: "2px solid #141251",
          color: "#141251",
        }}
        onClick={() => buttonActiveHandler(true)}
      >
        Arrivals
      </button>
      <button
        className="flex w-40 h-8 rounded-2xl border-[#141251] font-semibold justify-center items-center"
        style={{
          background: "none",
          outline: "2px solid #141251",
          color: "#141251",
        }}
        onClick={() => buttonActiveHandler(false)}
      >
        Departures
      </button>
    </div>
  );
}

export default ArrivalDeparturesButton;
