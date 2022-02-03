import React, { useEffect, useState } from 'react';
import { randomizer, speakWord } from '../../../../utils/utils';
import ListenIt from './ListenIt';

const ListenItContainer = (props) => {
    let [wordsForCurrent, setWordsForCurrent] = useState([]);
    let [currentWord, setCurrentWord] = useState('');
    let [counter, setCounter] = useState(15);
    let [check, setCheck] = useState(false);

    const checkWord = (userCheck) => {
        check === userCheck
            ? props.isWordCorrect(true)
            : props.isWordCorrect(false);

        props.changeWordIndex();
        setCounter(10);
    };

    const repeatWord = () => {
        speakWord(props.playWord.translate);
    };

    useEffect(() => {
        let timer;
        if (counter > 0) {
            timer = setTimeout(() => setCounter((c) => c - 1), 1000);
        } else {
            props.changeWordIndex();
            props.isWordCorrect(false);
            setCounter(15);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [counter]);

    useEffect(() => {
        if (props.itemsCount > 1) {
            setCurrentWord(wordsForCurrent[randomizer(0,2)])
        }
    }, [wordsForCurrent]);

    useEffect(() => {
        if (props.itemsCount > 1) {
             setWordsForCurrent([props.playWord.word,
                props.playWords[randomizer(0,props.itemsCount-1)].word,
                props.playWords[randomizer(0,props.itemsCount-1)].word])   
        }
        setCheck(false)
    }, [props.playWord]);
    
    useEffect(() => {
        props.playWord.word === currentWord ? setCheck(true) : setCheck(false);
    }, [currentWord,props.playWord]);

    return (
        <ListenIt
            playWord={props.playWord.word}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            currentWord={currentWord}
            counter={counter}
            checkWord={checkWord}
            repeatWord={repeatWord}
        />
    );
};

export default ListenItContainer;
