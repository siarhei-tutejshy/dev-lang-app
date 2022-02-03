import React, { useState } from 'react';
import s from '../AppGames.module.css';

const WriteIt = (props) => {
    let [word, setWord] = useState('')

    const onCheckWord = (e) => {
        e.preventDefault();
        props.checkWord(word);
        setWord('')
    };
   
    return (
        <div>
            <section className={s.gameContainer}>
                <span>Write a translation for this word</span>
                <h3>{props.playWord}</h3>
                <form className={s.writeWordBlock}>
                    <input type="text" value={word} onChange={(e)=> {setWord(e.target.value)}}/>
                    <button onClick={onCheckWord} className={s.btnOk}>      
                        check
                    </button>
                </form>
            </section>
        </div>
    );
};

export default WriteIt;
