import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const activeStyle = { color: "orange"}
    return (
        <div className="header">
        <NavLink exact to='/'  className="item" activeStyle={activeStyle}>Home</NavLink>
        <NavLink to='/about'  className="item" activeStyle={activeStyle}>About</NavLink>
        </div>
    );
};

export default Header;