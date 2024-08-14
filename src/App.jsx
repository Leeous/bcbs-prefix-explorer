
import Navigation from './components/Navigation.jsx'
import Settings from './components/Settings.jsx';
import Search from './components/Search.jsx';
import './App.css'

let foundHit;

function App() {
// 	const [searchValue, setSearchValue] = useState();
// 	const searchText = document.querySelector('#searchText');
// 	const searchBox = document.querySelector('#searchBox');


// const handleInput = event => {
//     setSearchValue(event.target.value);
// };

// useEffect(() => {
//     // Loop over JSON to find prefix TODO: add carrier, payer ID, and number search
//     // Clear search box if searchText length is < 3. Might change this behaviour. 
//     console.log("why is this being triggered");



// }, [searchValue]);
	return (
		<>
			<div id="app">
				<Navigation />
				<Search />
			</div>
			<div id='settings'>
				<Settings />
			</div>
		</>
	)
}

export default App
