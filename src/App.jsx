import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Disclaimer from './components/Disclaimer'
import Navigation from './components/Navigation'
import Settings from './components/Settings';
import Search from './components/Search';
import './App.css'

function App() {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<Disclaimer />} />
				<Route path="/search" element={<><Search /> <Navigation /></>} /> 
				<Route path="/settings" element={<><Settings /> <Navigation /> </>} /> 
			</Routes>
	  </BrowserRouter>
	)
}

export default App
