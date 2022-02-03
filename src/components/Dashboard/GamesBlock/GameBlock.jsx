import React from 'react';
import s from './GameBlock.module.css';
import PlayButton from '../../../assets/img/play.svg';
import { NavLink } from 'react-router-dom';

const GameBlock = (props) => {
    return (
        <div className={s.gameBlock}>
            <p>
                The most popular game <br /> <b>Put the translation</b>
            </p>
            <NavLink to="/game/put-it">
                <img className={s.btnPlay} src={PlayButton} alt="#" />
            </NavLink>
            <NavLink className={s.btnRandom} to={`/game/${props.getRandomGame}`} >
                Play Randon Game
            </NavLink>
        </div>
    );
};

export default GameBlock;
