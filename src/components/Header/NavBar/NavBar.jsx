import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/dashboard">home</NavLink>
            <NavLink to="/games">games</NavLink>
            <NavLink to="/library">library</NavLink>
            <NavLink to="/learn">learn</NavLink>
        </nav>
    );
};

export default NavBar;
