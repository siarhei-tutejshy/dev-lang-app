import SpeakIt from './SpeakIt';
import React, { useEffect, useState } from 'react';

const SpeakItContainer = (props) => {
    let [currentWords, setCurrentWords] = useState([
        'rqndom',
        ' current',
        'random2',
    ]);

    useEffect(() => {
        if (props.itemsCount > 1) {
            setCurrentWords(
                [
                    props.playWord.translate,
                    props.playWords[(props.wordIndex + 1) % props.itemsCount]
                        .translate,
                    props.playWords[(props.wordIndex + 2) % props.itemsCount]
                        .translate,
                ].sort(() => Math.random() - 0.5)
            );
        }
    }, [props.playWord]);

    useEffect(() => {
        props.checkingWord !== props.playWord.translate
            ? props.isWordCorrect(false)
            : props.isWordCorrect(true);
    }, [props.checkingWord]);

    return (
        <SpeakIt
            checkingWord={props.checkingWord}
            playWord={props.playWord.translate}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            currentWords={currentWords}
        />
    );
};

export default SpeakItContainer;
