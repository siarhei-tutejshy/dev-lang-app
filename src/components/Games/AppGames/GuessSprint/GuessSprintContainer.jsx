import React, { useEffect, useState } from 'react';
import GuessSprint from './GuessSprint';


const GuessSprintContainer = (props) => {
    let [currentWord, setCurrentWord] = useState('');
    let [counter, setCounter] = useState(10);
    let [check, setCheck] = useState(false)

    const checkWord=(checker)=> {
        
        if(check === checker){
            props.isWordCorrect(true);
        } else {
            props.isWordCorrect(false)
        }
        props.changeWordIndex()
        setCounter(10)
        console.log(check,checker,props.playWord.translate, currentWord)
        
    }
   
    useEffect(() => {
        let timer;
        if (counter > 0) {
            timer = setTimeout(() => setCounter((c) => c - 1), 1000);
        } else {
            
            props.changeWordIndex()
            setCounter(10)
            props.isWordCorrect(false)
        }
    
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [counter]);

    useEffect(() => {
        if (props.itemsCount > 1) {
            setCurrentWord(
                props.playWords[Math.floor(Math.random() * props.itemsCount)].translate      
            );
        }
    }, [props.playWord]);

    useEffect(() => {
        (props.playWord.translate === currentWord) ? setCheck(true) : setCheck(false)
    }, [currentWord]);
    

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
