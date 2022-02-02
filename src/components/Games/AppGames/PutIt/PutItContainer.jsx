import React, { useEffect, useState } from 'react';
import PutIt from './PutIt';

const PutItContainer = (props) => {
    let [currentWord, setCurrentWord] = useState([]);
    let [resultWord, setResultWord] = useState([]);
    let [correct, setCorrect] = useState(false);

    useEffect(() => {
        setCurrentWord(
            props.playWord.translate.split('').sort(() => Math.random() - 0.5)
        );
        setResultWord([]);
        setCorrect(false);
    }, [props.playWord]);

    const selectLetter = (i) => {
        let newCurrentWord = [...currentWord];
        newCurrentWord.splice(newCurrentWord.indexOf(i), 1);
        setCurrentWord(newCurrentWord);
        setResultWord(resultWord.concat(i));
    };

    const returnLetter = (i) => {
        let newResultWord = [...resultWord];
        newResultWord.splice(newResultWord.indexOf(i), 1);
        setResultWord(newResultWord);
        setCurrentWord(currentWord.concat(i));
    };

    useEffect(() => {
        if (resultWord.join('') === props.playWord.translate) {
            setCorrect(true);
        }
    }, [resultWord]);
    console.log(currentWord, resultWord);

    useEffect(() => {
        correct && props.isWordCorrect(true);
    }, [correct]);

    return (
        <PutIt
            playWord={currentWord}
            clue={props.playWord.word}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            selectLetter={selectLetter}
            resultWord={resultWord}
            returnLetter={returnLetter}
            correct={correct}
        />
    );
};

export default PutItContainer;
