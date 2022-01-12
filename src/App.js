import React, { useState } from "react";
import '../src/styles/style.scss'
import Featured from './components/Featured';
import Popular from './components/Popular';

function App() {

  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  }

  return (
    <>
      <div className="container">

          <div className="row">
            <div className="col" >
              <div className="searchBar__search">
                <input type="text" placeholder='Search for...' value={searchItem} onChange={handleChange}/>
              </div>
            </div>
          </div>
        
          <div className="mt-4"></div>

          <div className="row">
            <div className="col" >
              <div className="main">
                  <Popular filter = {searchItem}/>
                  <div className="mt-5"></div>

                  <Featured/>
  
                  <br/>
              </div>   
            </div>
          </div>               
        </div>

      </>
  );
}

export default App;
