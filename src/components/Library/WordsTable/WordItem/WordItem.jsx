import React from 'react';
import s from './WordItem.module.css';
import deleteBtn from '../../../../assets/img/delete.svg';

const WordItem = ({ id, word, translate, learnProgress, onRemoveWord }) => {
    return (
        <ul>
            <li>{word}</li>
            <li>{translate}</li>
            <li>{learnProgress}</li>

            <div className={s.settings}>
                <button onClick={(e) => onRemoveWord(id)}>
                    <img src={deleteBtn} alt="#" />
                </button>        
            </div>
        </ul>
    );
};

export default WordItem;
