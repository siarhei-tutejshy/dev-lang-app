import React, { useState,useEffect } from 'react';

import NavGames from '../../../UI/NavGames/NavGames';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';

import s from '../AppGames.module.css';
const ChectIt = (props) => {
    
    const onCheckWord = (word) => {
        props.changeWordIndex();
        props.addWordCheck(word.toLowerCase())
        
    };
   
    return ( 
            <section className={s.gameContainer}>
                <span>Write a translation for this word</span>
                <h3>{props.playWord}</h3>
                <ul className={s.btnContainer}>
                {props.currentWords.map((word,index) => (<li key={index} className={s.btnCheck} onClick={()=>onCheckWord(word)}>{word}</li>))}
                </ul>
            </section>
    );
};

export default ChectIt;
