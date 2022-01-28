import React, { useState,useEffect } from 'react';

import NavGames from '../../../UI/NavGames/NavGames';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';

import s from '../AppGames.module.css';
const WriteIt = (props) => {
    let [word, setWord] = useState('')
    
    
    const onCheckWord = (e) => {
        e.preventDefault();
        props.changeWordIndex();
        props.addWordCheck(word.toLowerCase())
        setWord('')
    };
    return (
        <div>
            <ProgressBar width={props.width} />
            <NavGames {...props.stats} totalPoints={props.totalPoints} />
            <section className={s.gameContainer}>
                <span>Write a translation for this word</span>
                <h3>{props.playWord}</h3>
                <form className={s.writeWordBlock}>
                    <input type="text" value={word} onChange={(e)=> {setWord(e.target.value)}}/>
                    <button
                        onClick={onCheckWord}
                        className={s.btnOk} 
                    >check</button>
                </form>
            </section>
        </div>
    );
};

export default WriteIt;
