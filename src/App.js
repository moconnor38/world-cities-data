import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [cityData, setCityData] = useState([]);

  async function getData() {
    const response = await fetch('https://datahub.io/core/world-cities/r/world-cities.json');
    const data = await response.json();
    setCityData(data);
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div >
      <div>
        <h1>World Cities</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Subcountry</th>
              <th>Geonameid</th>
            </tr>
          </thead>
          <tbody>
            {cityData.map((city) => {           
              return (
                <tr>
                  <td>{city.name}</td>
                  <td>{city.country}</td>
                  <td>{city.subcountry}</td>
                  <td>{city.geonameid}</td>
                </tr>
              )})
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
