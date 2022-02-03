import React, { useEffect } from 'react';
import WriteIt from './WriteIt';

const WriteItContainer = (props) => {
    const checkWord = (word) => {
        props.changeWordIndex();
        props.addWordCheck(word.toLowerCase())
    };

    useEffect(() => {
        if (props.playWord.translate.length > 1) {
            ((props.checkingWord !== props.playWord.translate) || !props.checkingWord)
                ? props.isWordCorrect(false)
                : props.isWordCorrect(true);
        }
    }, [props.wordIndex]);

    return (
        <WriteIt
            playWord={props.playWord.word}
            checkWord={checkWord}
            addWordCheck={props.addWordCheck}
        />
    );
};

export default WriteItContainer;
