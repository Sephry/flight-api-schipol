import React, { useEffect, useState } from 'react';
import './App.css';
import SelectBox from "./component/common/SelectBox";
import SearchBox from "./component/common/SearchBox";
import ArrivalDeparturesButton from "./component/common/ArrivalDeparturesButton";
import axios from 'axios';
import BoardList from './component/common/BoardList';


function App() {

  const [dataArrival, setDataArrival] = useState([]);
  const [dataDeparture, setDataDeparture] = useState([]);
  const [page, setPage] = useState(0);
  const [arrival, setArrival] = useState(true);
  const [filteredData, setFilteredData] = useState([]);



  const fetchFlights = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.schiphol.nl/public-flights/flights`,
        {
          headers: {
            'Accept': 'application/json',
            'app_id': "234213b6",
            'app_key': "141d3c9064ca6a05839a332c83eb3264",
            'ResourceVersion': 'v4'
          },
          params: {
            //flightName: "PC1251",
            //airline: 'PC',
            flightDirection: `${arrival ? "A" : "D"}`,
            //scheduledFrom: date,
            //scheduledTo: date,
            //sort: 'scheduleTime',
            //order: 'ASC',
            //page: 2
          }
        }
      );

       arrival
         ? setDataArrival([...dataArrival, ...response.data?.flights])
         : setDataDeparture([...dataDeparture, ...response.data?.flights]);
      

      console.log(response.data.flights);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //fetchFlights();
    
  }, [arrival])

  return (

    <div className="App">
      <div className='h-screen w-screen items-center flex flex-col'>

        <header className='text-5xl text-center text m-10' >
          Flight App
        </header>

        <div className="w-4/5 h-screen items-center justify-center  ">
          <div className="flex flex-row items-center justify-center ">
            <SelectBox />
            <SearchBox
              arrival={arrival}
              setArrival={setArrival}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
              dataArrival={dataArrival}
              dataDeparture={dataDeparture} />
          </div>
          <div className="flex flex-row items-center justify-center ">
            <ArrivalDeparturesButton setArrival={setArrival} arrival={arrival} />
          </div>
        </div>


        <div className='flex w-full justify-evenly'>
          {arrival ? (
            <BoardList arrival={arrival} data={dataArrival} filteredData={filteredData} />
          ) : (
            <BoardList arrival={arrival} data={dataDeparture} filteredData={filteredData} />
          )}
        </div>

      </div>

    </div>
  );
}

export default App;
