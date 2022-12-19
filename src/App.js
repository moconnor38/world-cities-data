import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';

const PER_PAGE = 10;

function App() {
  const [cityData, setCityData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  async function getData() {
    const response = await fetch('https://datahub.io/core/world-cities/r/world-cities.json');
    const data = await response.json();
    setCityData(data);
  }
  
  useEffect(() => {
    getData();
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = cityData
    .slice(offset, offset + PER_PAGE)
    .map(city => <React.Fragment key={city.geonameid}>
        <tr>
          <td>{city.name}</td>
          <td>{city.country}</td>
          <td>{city.subcountry}</td>
          <td>{city.geonameid}</td>
        </tr>
    </React.Fragment>);

  const pageCount = Math.ceil(cityData.length / PER_PAGE); 

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
            {currentPageData}
          </tbody>
        </table>
        <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      </div>
    </div>
  );
}

export default App;
