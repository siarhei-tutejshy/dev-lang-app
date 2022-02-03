import React from 'react';
import s from '../AppGames.module.css';

const PutIt = (props) => {
    const onCheckWord = () => {
        props.changeWordIndex();
    };

    return (
        <section className={s.gameContainer}>
            <span>Put together a translation</span>

            {props.correct && (
                <div className={s.contentBlock}>
                    <h3>Right you are</h3>
                    <h3 className={s.current}>{props.resultWord.join('')}</h3>
                    <button onClick={onCheckWord} className={s.btnCheck}>
                        NEXT
                    </button>
                </div>
            )}

            <div className={s.clueBlock}>
                <span>see the clue </span>
                <span className={s.clue}>{props.clue}</span>
            </div>

            <ul className={s.letterContainer}>
                {props.playWord.map((word, index) => (
                    <li key={index} className={s.letterBtn} onClick={() => props.selectLetter(word)}>
                         {word}
                    </li>     
                ))}
            </ul>

            <ul className={s.letterContainer}>
                {props.resultWord.map((word, index) => (
                    <li key={index} className={s.letterBtn} onClick={() => props.returnLetter(word)}>
                        {word}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PutIt;
