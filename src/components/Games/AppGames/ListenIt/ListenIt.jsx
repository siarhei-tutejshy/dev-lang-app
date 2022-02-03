import React from 'react';
import s from '../AppGames.module.css';
const ListenIt = (props) => {
    const onRightWord = () => {
        props.checkWord(true);
    };

    const onWrongtWord = () => {
        props.checkWord(false);
    };

    const onRepeat = () => {
        props.repeatWord();
    };

    return (
        <section className={s.gameContainer}>
            <div className={s.contentBlock}>
                <span className={s.timer}> {props.counter}</span>
            
                <span>It translation is</span>
                <h3>{props.currentWord}</h3>
                <span className={s.listen} onClick={onRepeat}></span>
                <span  style={{color:'#979696'}}>click to listen</span>
            </div>
            
            <ul className={s.letterContainer}>
                <li className={s.btnYes} onClick={onRightWord}>
                    yes
                </li>
                <li className={s.btnNo} onClick={onWrongtWord}>
                    no
                </li>
            </ul>
        </section>
    );
};

export default ListenIt;
