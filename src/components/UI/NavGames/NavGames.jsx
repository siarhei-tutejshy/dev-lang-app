import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavGames.module.css';
const NavGames = (props) => {
    return (
        <nav className={s.gameNav}>
            <NavLink className={s.btnBack} to={'/games'}></NavLink>
            <ul className={s.results}>
                <li>Errors: {props.error}</li>
                <li>Correct: {props.right}</li>
                <li>Points: {props.totalPoints}</li>
            </ul>
            
        </nav>
    );
};

export default NavGames;
