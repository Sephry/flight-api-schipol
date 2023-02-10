import React from "react";
import FlightCard from "./FlightCard";

function BoardList({ data, arrival, filteredData }) {
  return (
    <div className="flex flex-col w-full flex-wrap justify-evenly items-center pt-8 gap-8">
      {filteredData?.length
        ? filteredData.map((flight, id) => {
            return (
              <div key={id}>
                <FlightCard arrival={arrival} flight={flight} />
              </div>
            );
          })
        : data.map((flight, id) => {
            return (
              <div key={id}>
                <FlightCard arrival={arrival} flight={flight} />
              </div>
            );
          })}
    </div>
  );
}

export default BoardList;
