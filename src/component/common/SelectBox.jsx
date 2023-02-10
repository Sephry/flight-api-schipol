import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectBox({
  dataArrival,
  dataDeparture,
  setFilteredData,
  arrival,
}) {
  const [scheduleeDate, setScheduleeDate] = useState("");

  const selectFilterHandler = (e) => {
    setScheduleeDate("");
    setFilteredData("");
    e.preventDefault();
    if (scheduleeDate.length > 0) {
      setFilteredData(
        !arrival
          ? dataDeparture.filter((departure) => {
              return (
                departure?.scheduleDate?.toLowerCase() ===
                scheduleeDate.toLowerCase()
              );
            })
          : dataArrival.filter((arrival) => {
              return (
                arrival?.scheduleDate?.toLowerCase() ===
                scheduleeDate.toLowerCase()
              );
            })
      );
    }
  };

  return (
    <div>
      <FormControl
        sx={{ m: 5, width: 300, mt: 3 }}
        onSubmit={selectFilterHandler}
      >
        <Select
          displayEmpty
          value={scheduleeDate}
          onChange={(e) => setScheduleeDate(e.target.value)}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Today</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
        >
          {!arrival
            ? dataDeparture.map((departure, index) => {
                return (
                  <MenuItem key={index} value={departure.scheduleDate}>
                    {departure.scheduleDate}
                  </MenuItem>
                );
              })
            : dataArrival.map((arrival, index) => {
                return (
                  <MenuItem key={index} value={arrival.scheduleDate}>
                    {arrival.scheduleDate}
                  </MenuItem>
                );
              })}
        </Select>
      </FormControl>
    </div>
  );
}
