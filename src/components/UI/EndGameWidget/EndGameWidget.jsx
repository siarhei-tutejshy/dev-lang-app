import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import s from './EndGameWidget.module.css';
const EndGameWidget = (props) => {
    let path = useParams()
    console.log(path)
    return (
        <nav className={s.gameNav}>
            <NavLink className={s.btnBack} to={'/games'}>Back to games</NavLink>
            <NavLink className={s.btnBack} to={'/games'}>Back to games</NavLink>
            <ul className={s.results}>
                <li>Errors: {props.stats.error}</li>
                <li>Correct: {props.stats.right}</li>
                <li>Points: {props.totalPoints}</li>
            </ul>
            
        </nav>
    );
};

export default EndGameWidget;
