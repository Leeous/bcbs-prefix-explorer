import Cookies from 'universal-cookie';
import Disclaimer from './components/Disclaimer'
import Navigation from './components/Navigation'
import Settings from './components/Settings';
import Search from './components/Search';
import './App.css'

const cookies = new Cookies();

console.log(window.location.hash, cookies.get("disclaimerAccepted"))

const showDisclaimer = () => {
	// Check if user has acknowledged disclaimer
	if (!cookies.get("disclaimerAccepted")) {
		return(<Disclaimer />);
	}
}

const showSearch = () => {
	if (window.location.hash == "#search" || window.location.hash === "" && cookies.get("disclaimerAccepted") == true) {
		window.location.hash = "search";
		return(<><Search /> <Navigation /></>)
	}
}

const showSettings = () => {
	if (window.location.hash == "#settings") {
		return(<><Settings /> <Navigation /></>)
	}
}

export default() => {
	return(
		<>
			{showDisclaimer()}
			{showSearch()}
			{showSettings()}
		</>
	);
}

// export default App
