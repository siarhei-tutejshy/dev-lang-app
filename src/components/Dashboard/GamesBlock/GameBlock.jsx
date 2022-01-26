import s from './GameBlock.module.css';
import React from 'react';
import PlayButton from '../../../assets/img/play.svg';

const GameBlock = () => {
    return (
        <div className={s.gameBlock}>
            <p>
                asdasdadadsasd <br /> <b>See it</b>
            </p>

            <img className={s.btnPlay} src={PlayButton} alt="#" />
            <button className={s.btnRandom}>Play Randon Game</button>
        </div>
    );
};

export default GameBlock;
