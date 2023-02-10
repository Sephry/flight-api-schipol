import React, { useState } from "react";

function ArrivalDeparturesButton({ arrival, setArrival }) {
  const [color, setColor] = useState("#141251");

  return (
    <div className="flex flex-row justify-center gap-4 items-center p-4 w-4/5 ">
      <div
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
      >
        Arrivals
      </div>
      <div
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
      >
        Departures
      </div>
    </div>
  );
}

export default ArrivalDeparturesButton;
