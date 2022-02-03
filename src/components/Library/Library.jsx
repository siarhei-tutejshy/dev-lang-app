import React from 'react';
import s from './Library.module.css';
import addBtn from '../../assets/img/add.svg';
import WordsTable from './WordsTable/WordsTable';

const Library = (props) => {
    
    let onTextChange = (e) => {
        props.addNewWordText(e.target.value);
    };

    let addWord = (e) => {
        e.preventDefault();
        props.onAddWord();
    };

    return (
        <section className={s.libraryBlock}>
            <span>Add new <b>words</b></span>
                
            <form className={s.addWordBlock}>
                <input type="text" onChange={onTextChange} value={props.newWordText} /> 
                <button onClick={addWord}>
                    <img src={addBtn} alt="#" />
                </button>
            </form>

            <WordsTable library={props.library} onRemoveWord={props.onRemoveWord}/>
        </section>
    );
};

export default Library;
