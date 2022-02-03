import React from 'react';
import { NavLink } from 'react-router-dom';
import './EndGameWidget.css';

const EndGameWidget = (props) => {
    
    return (
        <div className={props.endGameActive ? 'modal active' : 'modal'}>
            <div className={props.endGameActive ? 'endGame active' : 'endGame'}>
                <h3>Game is over</h3>
                <p>Your result:</p>

                <ul className={'results'}>
                    <li>Errors: {props.stats.error}</li>
                    <li>Correct: {props.stats.right}</li>
                    <li>Points: {props.totalPoints}</li>
                </ul>

                <div className="buttonsBlock">
                    <NavLink className={'btn'} to={'/games'}>
                        Back to games
                    </NavLink>

                    <button className={'btn'} onClick={()=>window.location.reload()}>
                        Play again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EndGameWidget;
