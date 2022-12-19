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
    <div className='ui grid'>
      <div className='eight wide column'>
      <div>
        <h1>World Cities</h1>
      </div>
      <div>
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
        <div className='eight wide column'>
          <h1>Dummy Text</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </div>
  );
}

export default App;
