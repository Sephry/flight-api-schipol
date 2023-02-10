import React, { useEffect, useState } from 'react';
import './App.css';
import MainScreen from './component/MainScreen';
import axios from 'axios';


function App() {


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
            //flightDirection: 'A',
            //scheduledFrom: date,
            //scheduledTo: date,
            //sort: 'scheduleTime',
            //order: 'ASC'
            }
        }
      );
      console.log(response.data.flights);
    } catch (error) {
      console.error(error);
    }
  };
fetchFlights()

  return (

    <div className="App">
      <div className='h-screen w-screen items-center flex flex-col'>
        <header className='text-5xl text-center text m-10' >
          Flight App
        </header>

        <MainScreen />

      </div>

    </div>
  );
}

export default App;
