import React from 'react';
import s from '../AppGames.module.css';
const GuessSprint = (props) => {
    
    const onRightWord = () => {
        props.checkWord(true);
    };

    const onWrongtWord = () => {
        props.checkWord(false);
    };

    return (
        <section className={s.gameContainer}>
            <div className={s.contentBlock}>
                <span className={s.timer}> {props.counter}</span>
            </div>
            <span>Is it true that</span>
            <h3>{props.playWord}</h3>
            <h3 className={s.current}>{props.currentWord}</h3>
            <ul className={s.letterContainer}>
                <li  className={s.btnYes} onClick={onRightWord}>
                    yes
                </li>
                <li className={s.btnNo} onClick={onWrongtWord}>
                    no
                </li>
            </ul>
        </section>
    );
};

export default GuessSprint;
