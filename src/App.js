import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  async function getData() {
    const response = await fetch('https://datahub.io/core/world-cities/r/world-cities.json');
    const data = await response.json();
    console.log(data);
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div >
      <h1>World Cities</h1>
    </div>
  );
}

export default App;
