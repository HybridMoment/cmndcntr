import React from 'react'
import {Link} from 'react-router-dom'

function Header (props) {
    return (
        <div>
             <Link to="/" class="Nav-link">Home</Link>
             <Link to="/BikeFleet" class="Nav-link">Bike Fleet</Link>
             <Link to="/Employees" class="Nav-link">Employees</Link>
        </div>
    )
}

export default Header