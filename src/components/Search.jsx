import BCBSDB from '../assets/bcbs_db.json'

function Search() {
    function searchDB(e) {
        let searchValue = e.toLocaleUpperCase();
        // Ensure we wait for the full prefix to attempt a match
        // Loop over JSON to find prefix TODO: add carrier, payer ID, and number search
        // Clear search box if searchText length is < 3. Might change this behaviour.
        if (searchValue.length < 3) { searchBox.innerHTML = ""; }

        if (searchValue.length == 3) {
            for (let i = 0; i < BCBSDB.length; i++) {
                let prefixValue = BCBSDB[i]["prefix"];
                if (prefixValue == searchValue.toLocaleUpperCase()) {
                    // Clear search box on next to display next hit
                    if (searchBox.hasChildNodes()) { searchBox.innerHTML = "" };

                    // Display carrier name, if it exists
                    if (BCBSDB[i].carrier != "Prefix Not in Use") {
                        searchBox.insertAdjacentHTML('beforeend', `<p>It seems like prefix <b>${BCBSDB[i].prefix}</b> is for carrier <b>${BCBSDB[i].carrier}</b>.</p>`);
                    } else {
                        searchBox.insertAdjacentHTML('beforeend', `<p>It seems like prefix <b>${BCBSDB[i].prefix}</b> is either no longer in use or was never used by a BCBS carrier.</p>`);
                    }

                    // Display carrier website, if it exists
                    if (BCBSDB[i].url) {
                        searchBox.insertAdjacentHTML('beforeend', `<p><a href="${BCBSDB[i].url}">Website</a></p>`);
                    }

                    // Display carrier benefits phone number, if it exists
                    if (BCBSDB[i].benefits_phone_number) {
                        try {
                            searchBox.insertAdjacentHTML('beforeend', `<p>Phone Number (benefits): ${"<br/><span>" + JSON.parse(BCBSDB[i].benefits_phone_number).phone_numbers.join(',<br/>') + "</span>"}</p>`);
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

            // if (!foundHit) {
            // 	searchBox.insertAdjacentHTML('beforeend', `<p>aaaaaaa</p>`);
            // }
        }
    }

    return (
        <form>
            <input onChange={(e) => searchDB(e.target.value)} autoComplete='off' maxLength="3" type="text" size={5} name="Prefix" id="searchText" />
            {/* <input type="submit" value="Go" onClick={searchDB()} onSubmit={() => searchDB()} hidden /> */}
            <div id="searchBox"></div>
        </form>
    );
}

export default Search