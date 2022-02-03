import React, { useEffect, useState } from 'react';
import { randomizer } from '../../../../utils/utils';
import GuessSprint from './GuessSprint';

const GuessSprintContainer = (props) => {
    let [currentWord, setCurrentWord] = useState('');
    let [wordsForCurrent, setWordsForCurrent] = useState([]);
    let [counter, setCounter] = useState(10);
    let [check, setCheck] = useState(false);

    const checkWord = (userCheck) => {
        check === userCheck
            ? props.isWordCorrect(true)
            : props.isWordCorrect(false);
      
        props.changeWordIndex();
        setCounter(10);
    };

    useEffect(() => {
        let timer;
        if (counter > 0) {
            timer = setTimeout(() => setCounter((c) => c - 1), 1000);
        } else {
            props.changeWordIndex();
            setCounter(10);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [counter]);

    useEffect(() => {
        if (props.itemsCount > 1) setCurrentWord(wordsForCurrent[randomizer(0,2)])  
    }, [wordsForCurrent]);

    useEffect(() => {
        if (props.itemsCount > 1) {
             setWordsForCurrent([props.playWord.translate,
                props.playWords[randomizer(0,props.itemsCount-1)].translate,
                props.playWords[randomizer(0,props.itemsCount-1)].translate])
        }
        setCheck(false)
    }, [props.playWord]);


    useEffect(() => {
        (props.playWord.translate === currentWord)
            ? setCheck(true)
            : setCheck(false);
    }, [currentWord,props.playWord]);

    return (
        <GuessSprint
            playWord={props.playWord.word}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            currentWord={currentWord}
            counter={counter}
            checkWord={checkWord}
        />
    );
};

export default GuessSprintContainer;
