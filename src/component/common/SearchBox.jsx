import { TextField } from "@mui/material";
import React, { useState } from "react";


function SearchBox({
  dataArrival,
  dataDeparture,
  filteredData,
  setFilteredData,
  arrival,
  seArrival,
}) {
  const [inputValue, setInputValue] = useState("");

  const searchFilterHandler = (e) => {
    setInputValue("");
    setFilteredData("");
    e.preventDefault();
    if (inputValue.length > 0) {
      setFilteredData(
        !arrival
          ? dataDeparture.filter((departure) => {
              return (
                departure?.flightName.toLowerCase() === inputValue.toLowerCase()
              );
            })
          : dataArrival.filter((arrival) => {
              return (
                arrival?.flightName.toLowerCase() === inputValue.toLowerCase()
              );
            })
      );
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-4">
      <form onSubmit={searchFilterHandler}>
      <TextField
        sx={{ m: 5, width: 300, mt: 3 }}
        id="outlined-basic"
        variant="outlined"
        label="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      </form>
    </div>
  );
}

export default SearchBox;
