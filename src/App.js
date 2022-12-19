import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import Spinner from './components/Spinner';
import TextColumn from './components/TextColumn';
import Table from './components/Table';

const PER_PAGE = 10;

function App() {
  const [cityData, setCityData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  async function getData() {
    const response = await fetch('https://datahub.io/core/world-cities/r/world-cities.json');
    const data = await response.json();
    setIsLoading(false);
    setCityData(data);
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  if (isLoading) {
    return <Spinner message='Getting city data...' />;
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = cityData.slice(offset, offset + PER_PAGE)

  const pageCount = Math.ceil(cityData.length / PER_PAGE); 

  return (
    <div className='ui grid'>
      <div className='eight wide column'>
        <div>
          <h1>World Cities</h1>
        </div>
        <div className='ui container'>
          <Table cities={currentPageData}/>
          <div className='ui container'>      
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
        <div className='eight wide column'>
          <div className="ui container">
            <div>
              <h1>Some Text</h1>
            </div>
            <TextColumn />
        </div>
      </div>
    </div>
  );
}

export default App;
