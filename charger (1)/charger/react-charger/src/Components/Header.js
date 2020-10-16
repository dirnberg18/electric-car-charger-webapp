import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import {RiChargingPileLine} from "react-icons/ri";
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <nav>
            <div className='header-nav'>
                <div>
                    <RiChargingPileLine />
                </div>
                <div>
                    <NavLink to='/'><h1>Home</h1></NavLink>
                </div>
                <div>
                    <NavLink to='/VisitorView'><h1>Map</h1></NavLink>
                </div>
                <div>
                    <NavLink to='/UserView'><h1>UserView</h1></NavLink>
                </div>
                <div>
                    <NavLink to='/Login'><h1>Login</h1></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;

//<button className='loggin-button'><h4>Login</h4></button>