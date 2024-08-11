
import React, { useState } from 'react';
import BCBSDB from '../src/assets/bcbs_db.json'
import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState(" ");
  const searchBox = document.querySelector('#searchBox');
  const searchText = document.querySelector('#searchText');
  let foundHit;


  const handleInput = event => {
    // Force search value to be uppercase
    setSearchValue(event.target.value.toLocaleUpperCase());
  };

  const searchDB = () => {
    // Loop over JSON to find prefix TODO: add carrier, payer ID, and number search
    for (let i = 0; i < BCBSDB.length; i++) {
      let prefixValue = BCBSDB[i]["prefix"];
      foundHit = false;
      if (prefixValue == searchValue) {
        // Clear search box on next to display next hit
        if (searchBox.hasChildNodes()) {searchBox.innerHTML = ""};

        // Display carrier name, if it exists
        if (BCBSDB[i].carrier != "Prefix Not in Use") {
          searchBox.insertAdjacentHTML('beforeend', `<p>It seems like prefix <b>${BCBSDB[i].prefix}</b> is for carrier <b>${BCBSDB[i].carrier}</b>.</p>`);
          foundHit = true;
        } else {
          searchBox.insertAdjacentHTML('beforeend', `<p>It seems like prefix <b>${BCBSDB[i].prefix}</b> is either no longer in use or was never used by a BCBS carrier.</p>`);
          foundHit = true;
        }

        // Display carrier website, if it exists
        if (BCBSDB[i].url) {
          searchBox.insertAdjacentHTML('beforeend', `<p><a href="${BCBSDB[i].url}">Website</a></p>`);
        }

        // Display carrier benefits phone number, if it exists
        if (BCBSDB[i].benefits_phone_number) {
          try {
            searchBox.insertAdjacentHTML('beforeend', `<p>Phone Number (benefits): ${"<span>" + JSON.parse(BCBSDB[i].benefits_phone_number).phone_numbers.join(', ') + "</span>"}</p>`);            
            return;
          } catch (e) {
            console.log("Carrier has a single phone number for benefits.")
          }
          searchBox.insertAdjacentHTML('beforeend', `<p>Phone Number (benefits): ${BCBSDB[i].benefits_phone_number}</p>`);
        }

        // Display carrier claims phone number, if it exists
        if (BCBSDB[i].claims_phone_number) {
          searchBox.insertAdjacentHTML('beforeend', `<p>Phone Number (claims): ${BCBSDB[i].claims_phone_number}</p>`);
        }
      }
    }
  };

  return (
    <>
      <h2>BCBS Prefix Explorer</h2>
      <form>
        <input onChange={handleInput} autoComplete='off'  maxLength="3" type="text" size={5} name="Prefix" id="searchText" />
        <input type="submit" value="Go" onClick={searchDB()} onSubmit={searchDB()} hidden/>
        <div id="searchBox"></div>
      </form>
    </>
  )
}

export default App
