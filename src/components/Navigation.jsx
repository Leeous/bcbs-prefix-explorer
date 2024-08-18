import '../App.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return(
        <nav id="navigation">
            <ul>
                <li><NavLink to="/">Search<br/>&#x1F50E;</NavLink></li>
                <li><NavLink to="/settings">Settings<br/>&#9874;</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation