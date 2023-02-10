import React from "react";

function FlightCard({ flight, arrival }) {
  const {
    id,
    actualLandingTime,
    estimatedLandingTime,
    flightName,

    airlineCode,
    route,
    scheduleTime,
    scheduleDate,

    baggageClaim,

    expectedTimeBoarding,
    actualOffBlockTime,
    publicFlightState,
    gate,
    aircraftType: { iataMain },
  } = flight;

  return (
    <div
      key={id}
      className="flex items-center justify-around bg-[#141251] mb-2 relative z-0 flex-wrap w-40 p-8 gap-4 rounded-2xl"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">Flight Status</p>
        <h2 className="text-white">{}</h2>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">Flight Code</p>
        <h2 className="text-white">{flightName}</h2>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">Airline Code</p>
        <h2 className="text-white">{airlineCode}</h2>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">Aircraft Type</p>
        <h2 className="text-white">{iataMain}</h2>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">
          {!arrival ? "Departure Date" : "Arrival Date"}
        </p>
        <h2 className="text-white">{scheduleDate}</h2>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">
          {!arrival ? "Departure Time" : "Arrival Time"}
        </p>
        <h2 className="text-white">{scheduleTime}</h2>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">{!arrival ? "Baggage" : "Gate"}</p>
        <h2 className="text-white">
          {!arrival
            ? gate || "-"
            : baggageClaim?.belts.map((belt, index) => {
                return <div key={index}>{belt}</div>;
              }) || "-"}
        </h2>
      </div>
    </div>
  );
}

export default FlightCard;
