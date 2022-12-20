import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import './App.css';
import Spinner from './components/Spinner';
import Text from './components/Text';
import Table from './components/Table';

const PER_PAGE = 10;

function App() {
  const [cityData, setCityData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Error handling
  async function getData() {
      const response = await fetch('https://datahub.io/core/world-cities/r/world-cities.json');
      const data = await response.json();
      setCityData(data);
      setIsLoading(false);
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
            <Text numberOfParagraphs={10}/>
        </div>
      </div>
    </div>
  );
}

export default App;
