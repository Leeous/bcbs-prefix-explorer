import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'
import Settings from './components/Settings';
import Search from './components/Search';
import './App.css'

function App() {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<><Search /> <Navigation /></>} /> 
				<Route path="/settings" element={<><Settings /> <Navigation /> </>} /> 
			</Routes>
	  </BrowserRouter>
	)
}

export default App
