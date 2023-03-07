import React, { useState } from 'react';
import './App.css';

function App() {
  const [busTimings, setBusTimings] = useState([
    { time: '08:00', destination: 'Central Station', status: 'On Time' },
    { time: '08:30', destination: 'City Square', status: 'Delayed' },
    { time: '09:00', destination: 'North End', status: 'On Time' },
    { time: '09:30', destination: 'South Side', status: 'On Time' },
    { time: '10:00', destination: 'West End', status: 'Delayed' },
    { time: '10:30', destination: 'East Side', status: 'On Time' },
    { time: '11:00', destination: 'Central Station', status: 'On Time' },
    { time: '11:30', destination: 'City Square', status: 'Delayed' },
    { time: '12:00', destination: 'North End', status: 'On Time' },
    { time: '12:30', destination: 'South Side', status: 'On Time' },
  ]);

  return (
    <div className="App">
    {/* add a bus no search box  */}
      <div className="search-box">
        <input type="text" placeholder="Search Bus No" /*add a color*/
        style={{color:'black',borderRadius:'10px',borderColor:'aqua'}}
        />

    
      </div>
      {/* add a search button for search box to search */}
      <div className="search-button" >
        <button >Search</button>
        {/* add color to button */}
        <style>{'button{border-radius:10px}'}</style>
        <style>{'button{background-color:#99f2e6}'}</style>
        
      </div>
      <h1>Bus Timing Schedule</h1>
      <h2> Bus no : 515 </h2>
      <div className="table-container">
        {busTimings.map((timing, index) => (
          <div className="timing-row" key={index}>
          {/* add a class for showing the current location of the bus */}
            <div className="current-location">
              <div className="bus-icon">
                <img src="https://img.icons8.com/ios/50/000000/bus.png" alt="bus" />
              </div>
              <div className="location">Current Location</div>
            </div>
            {/* the current location must be in any only single row */}
            <div className="line"></div>
            <div className="timing-info">
              <div className="time">{timing.time}</div>
              <div className="destination">{timing.destination}</div>
            </div>
            <div className={`status ${timing.status === 'On Time' ? 'on-time' : 'delayed'}`}>
              {timing.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;