import '../App.css'

function Navigation() {
    return(
        <nav id="navigation">
            <ul>
                <li><a onClick={() => {window.location.hash = "search"; window.location.reload()}} href="#search">Search<br/>&#x1F50E;</a></li>
                <li><a onClick={() => {window.location.hash = "settings"; window.location.reload()}} href="#settings">Settings<br/>&#9874;</a></li>
            </ul>
        </nav>
    )
}

export default Navigation