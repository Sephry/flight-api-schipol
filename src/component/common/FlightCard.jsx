import React from "react";

function FlightCard({ flight, arrival }) {
  const {
    id,
    flightName,

    airlineCode,
    route,
    scheduleTime,
    scheduleDate,

    baggageClaim,

    publicFlightState,
    gate,
    aircraftType: { iataMain },
  } = flight;

  let flightStatus = "";

  switch (publicFlightState?.flightStates[0]) {
    case "SCH":
      flightStatus = "On Time";
      break;
    case "AIR":
      flightStatus = "On Air";
      break;
    case "EXP":
      flightStatus = "Landing";
      break;
    case "ARR":
      flightStatus = "Completed";
      break;
    case "DEL":
      flightStatus = "Delayed";
      break;
    case "CNX":
      flightStatus = "Canceled";
      break;
    case "TOM":
      flightStatus = "Tomorrow";
      break;
    case "FIR":
      flightStatus = "Approaching";
      break;
    default:
      flightStatus = "No Info Yet";
      break;
  }

  return (
    <div
      key={id}
      className="flex w-full items-center justify-around bg-[#141251] mb-2 relative z-0 flex-wrap p-8 gap-4 rounded-2xl"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-white">Flight Status</p>
        <h2 className="text-white">{flightStatus}</h2>
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
