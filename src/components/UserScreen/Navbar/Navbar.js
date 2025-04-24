import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-heading'>Cricket Live Score</div>
            <div className='navbar-elements-container'>
                <ol className='navbar-elements'>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <li>Live Score</li>
                    </Link>
                    <Link to="/matches" style={{ textDecoration: "none", color: "white" }}>
                        <li>Matches</li>
                    </Link>
                    <Link to="/teams" style={{ textDecoration: "none", color: "white" }}>
                        <li>Teams</li>
                    </Link>
                    <Link to="/players" style={{ textDecoration: "none", color: "white" }}>
                        <li>Players</li>
                    </Link>
                </ol>
            </div>
        </div>
    )
}

export default Navbar