import React, { useState,useEffect } from 'react';
import s from '../AppGames.module.css';
const ChectIt = (props) => {
    
    const onCheckWord = (word) => {
        props.changeWordIndex();
        props.addWordCheck(word.toLowerCase())
    };
   
    return ( 
            <section className={s.gameContainer}>
                <span>Сhoose this word</span>
                <h3>{props.playWord}</h3>
                <ul className={s.btnContainer}>
                {props.currentWords.map((word,index) => (<li key={index} className={s.btnCheck} onClick={()=>onCheckWord(word)}>{word}</li>))}
                </ul>
            </section>
    );
};

export default ChectIt;
