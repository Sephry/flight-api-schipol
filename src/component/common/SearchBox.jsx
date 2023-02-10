import { React } from "react";
import TextField from "@mui/material/TextField";


function SearchBox() {


  return (
    <div className="search">
      <TextField
        sx={{ m: 5, width: 300, mt: 3 }}
        id="outlined-basic"
        variant="outlined"
        label="Search"

      />
    </div>
  );
}

export default SearchBox;
