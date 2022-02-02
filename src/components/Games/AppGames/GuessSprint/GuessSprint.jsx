import React, { useState,useEffect } from 'react';
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
                { <span>"Countdown": {props.counter}</span>}
                <span>Is it true that</span>
                <h3>{props.playWord}</h3>
                <h3>{props.currentWord}</h3>
                <ul className={s.btnContainer}>
                    <li  className={s.btnCheck} onClick={onRightWord}>yes</li>
                    <li  className={s.btnCheck} onClick={onWrongtWord}>no</li>
                </ul>
            </section>
    );
};

export default GuessSprint;
