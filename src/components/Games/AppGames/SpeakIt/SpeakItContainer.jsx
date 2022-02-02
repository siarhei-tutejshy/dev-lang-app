import SpeakIt from './SpeakIt';
import React, { useEffect } from 'react';

const SpeakItContainer = (props) => {
    
    useEffect(() => {
        if (props.checkingWord) {
            props.checkingWord !== props.playWord.translate
                ? props.isWordCorrect(false)
                : props.isWordCorrect(true);
        }
    }, [props.checkingWord]);
    useEffect(() => {
        props.addWordCheck('')
        
    }, [props.wordIndex]);


    return (
        <SpeakIt
            checkingWord={props.checkingWord}
            playWord={props.playWord.translate}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
        />
    );
};

export default SpeakItContainer;
