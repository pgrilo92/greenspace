import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header(props) {
    return(
        props.user ?
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to='/' className="nav-link">Greenspace</Link>
                </li>
                <li class="nav-item">
                    <Link to='' className="nav-link">{props.user.name}</Link>
                </li>
                <li class="nav-item">
                    <Link to='' onClick={props.handleLogout} className="nav-link">Logout</Link>
                </li>
            </ul>
        </nav>
        :
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to='/' className="nav-link">Greenspace</Link>
                </li>
                <li class="nav-item">
                    <Link to='signup' className="nav-link">Signup</Link>
                </li>
                <li class="nav-item">
                    <Link to='login' className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
