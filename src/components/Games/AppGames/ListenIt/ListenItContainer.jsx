import React, { useEffect, useState } from 'react';
import ListenIt from './ListenIt';

const ListenItContainer = (props) => {
    let [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        console.log(Math.floor(Math.random() * (props.itemsCount + 1)))
        if (props.itemsCount > 1) {
            setCurrentWord(props.playWords[Math.floor(Math.random() * (props.itemsCount))].translate);
                
               
        }
    }, [props.playWord]);

    useEffect(() => {
        if (props.checkingWord)
            props.checkingWord !== props.playWord.translate
                ? props.isWordCorrect(false)
                : props.isWordCorrect(true);
        props.addWordCheck('');
    }, [props.wordIndex]);

    return (
        <ListenIt
            playWord={props.playWord.word}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            currentWord={currentWord}
        />
    );
};

export default ListenItContainer;
