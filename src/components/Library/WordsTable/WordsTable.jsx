import React from 'react';
import WordItem from './WordItem/WordItem';
import s from './WordsTable.module.css';


const WordsTable = (props) => {
  
    return (
        <div className={s.wordsTable}>
            <ul>
                <li>
                    <h3>Word</h3>
                </li>
                <li>
                    <h3>Translate</h3>
                </li>
                <li>
                    <h3>Learn</h3>
                </li>
            </ul>
             {props.library.map(item => (<WordItem {...item}/>))}
        </div>
    );
};

export default WordsTable
