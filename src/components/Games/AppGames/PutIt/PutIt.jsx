import React, { useState, useEffect } from 'react';
import s from '../AppGames.module.css';
const PutIt = (props) => {
    const onCheckWord = () => {
        props.changeWordIndex();
    };

    return (
        <section className={s.gameContainer}>
            <span>Put together a translation</span>
            {props.correct && (
                <div>
                    <h3>Right you are</h3>
                    <h3>{props.resultWord.join('')}</h3>
                    <button onClick={onCheckWord} className={s.btnCheck}>
                        NEXT
                    </button>
                </div>
            )}
            <div className={s.clueBlock}>
                <span>see the clue </span>
                <span className={s.clue}>{props.clue}</span>
            </div>

            <ul className={s.btnContainer}>
                {props.playWord.map((word, index) => (
                    <li
                        key={index}
                        className={s.btnCheck}
                        onClick={() => props.selectLetter(word)}
                    >
                        {word}
                    </li>
                ))}
            </ul>
            <ul className={s.btnContainer}>
                {props.resultWord.map((word, index) => (
                    <li
                        key={index}
                        className={s.btnCheck}
                        onClick={() => props.returnLetter(word)}
                    >
                        {word}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PutIt;
