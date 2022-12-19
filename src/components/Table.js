import React from 'react';

const Table = (props) => {
  return(
    <table className='ui green table'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Subcountry</th>
        <th>Geonameid</th>
      </tr>
    </thead>
    <tbody>
      {props.cities.map((city) =>{
        return(
          <tr key={city.geonameid}>
            <td>{city.name}</td>
            <td>{city.country}</td>
            <td>{city.subcountry}</td>
            <td>{city.geonameid}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  );
};

export default Table;
