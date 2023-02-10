import React, { useState } from "react";

function ArrivalDeparturesButton({ setArrival, arrival }) {
  const [color, setColor] = useState("#141251");

  const buttonActiveHandler = (isTrue, color) => {
    setArrival(isTrue);
    setColor(color);
  };

  return (
    <div className="flex flex-row justify-center gap-4 items-center p-4 w-4/5 ">
      <button
        className="flex w-40 h-8 rounded-2xl border-[#141251] font-semibold justify-center items-center"
        style={
          arrival
            ? {
                backgroundColor: color,
                outline: "2px solid #141251",
                color: "#fff",
              }
            : {
                background: "none",
                outline: "2px solid #141251",
                color: "#141251",
              }
        }
        onClick={() => buttonActiveHandler(true, "#141251")}
      >
        Arrivals
      </button>
      <button
        className="flex w-40 h-8 rounded-2xl border-[#141251] font-semibold justify-center items-center"
        style={
          !arrival
            ? {
                background: color,
                outline: "2px solid #141251",
                color: "#fff",
              }
            : {
                background: "none",
                outline: "2px solid #141251",
                color: "#141251",
              }
        }
        onClick={() => buttonActiveHandler(false, "#141251")}
      >
        Departures
      </button>
    </div>
  );
}

export default ArrivalDeparturesButton;
