import React from "react";

function FlightCard({ flight, arrival }) {
  const {
    id,
    actualLandingTime,
    estimatedLandingTime,
    flightName,

    route,
    scheduleTime,

    baggageClaim,

    expectedTimeBoarding,
    actualOffBlockTime,
    publicFlightState,
    terminal,
    gate,
    aircraftType: { iataMain },
  } = flight;

  return (
    <div
      key={id}
      className="flex items-center justify-around bg-white mb-2 relative z-0 flex-wrap w-40 p-8 gap-4 rounded-2xl"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <p>Flight Status</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <p>Flight Name</p>
        <h2>{flightName}</h2>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <p>Terminal</p>
        <h2>{terminal || "-"}</h2>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <p>Aircraft</p>
        <h2>{iataMain}</h2>
      </div>
      
    </div>
  );
}

export default FlightCard;
