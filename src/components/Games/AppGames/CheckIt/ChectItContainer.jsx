import React, { useEffect, useState } from 'react';
import ChectIt from './ChectIt';

const ChectItContainer = (props) => {
    let [currentWords, setCurrentWords] = useState(['rqndom',' current','random2',]);

    useEffect(() => {
        if (props.itemsCount > 1) {
            setCurrentWords(
                [
                    props.playWord.word,
                    props.playWords[(props.wordIndex + 1) % props.itemsCount].word,   
                    props.playWords[(props.wordIndex + 2) % props.itemsCount].word,      
                ].sort(() => Math.random() - 0.5)
            );
        }
    }, [props.playWord]);

    useEffect(() => {
        if (props.checkingWord)
            props.checkingWord !== props.playWord.word
                ? props.isWordCorrect(false)
                : props.isWordCorrect(true);
        props.addWordCheck('');
    }, [props.wordIndex]);

    return (
        <ChectIt
            playWord={props.playWord.translate}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            currentWords={currentWords}
        />
    );
};

export default ChectItContainer;
