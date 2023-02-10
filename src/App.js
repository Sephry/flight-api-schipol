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
  const [arrival, setArrival] = useState(true);
  const [filteredData, setFilteredData] = useState([]);


  const addDays = (date, days) => {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
  };

  let date = new Date();
  date.setHours(date.getHours() + 2);
  date.setMinutes(date.getMinutes() + 60);

  let dateData = new Date();
  const dateNow = date;
  const dateTomorrow = addDays(dateData, 1);

  const jsonDateNow = dateNow.toJSON().split(".")[0];
  const jsonDateTomorrow = dateTomorrow.toJSON().split(".")[0];


  const fetchFlights = async () => {
    try {
      const response = await axios.get(
        `/flights?flightDirection=${arrival ? "A" : "D"
        }&fromDateTime=${jsonDateNow}&toDateTime=${jsonDateTomorrow}&searchDateTimeField=scheduleDateTime&page=0&sort=+scheduleDate, +scheduleTime`,
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
            //flightDirection: `${arrival ? "A" : "D"}`,
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
    fetchFlights();

  }, [arrival])

  return (

    <div className="App">
      <div className='h-screen w-screen items-center flex flex-col'>

        <header className='text-5xl text-center text m-10' >
          Flight App
        </header>

        <div className="w-4/5 h-screen items-center justify-center  ">
          <div className="flex flex-row items-center justify-center ">
            <SelectBox
              arrival={arrival}
              setFilteredData={setFilteredData}
              dataArrival={dataArrival}
              dataDeparture={dataDeparture} />
            <SearchBox
              arrival={arrival}
              setFilteredData={setFilteredData}
              dataArrival={dataArrival}
              dataDeparture={dataDeparture} />
          </div>
          <div className="flex flex-row items-center justify-center ">
            <ArrivalDeparturesButton setArrival={setArrival} arrival={arrival} />
          </div>
        </div>


        <div className='flex w-full justify-evenly flex-col'>
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
