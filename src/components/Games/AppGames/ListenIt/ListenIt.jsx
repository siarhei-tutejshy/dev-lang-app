import React, { useState,useEffect } from 'react';
import s from '../AppGames.module.css';
const ListenIt = (props) => {
    
    const onCheckWord = (word) => {
        props.changeWordIndex();
        props.addWordCheck(word.toLowerCase())
    };
   
    return ( 
            <section className={s.gameContainer}>
                <span>Write a translation for this word</span>
                <h3>{props.playWord}</h3>
                <h3>{props.currentWord}</h3>
                {/* <ul className={s.btnContainer}>
                {props.currentWords.map((word,index) => (<li key={index} className={s.btnCheck} onClick={()=>onCheckWord(word)}>{word}</li>))}
                </ul> */}
            </section>
    );
};

export default ListenIt;
