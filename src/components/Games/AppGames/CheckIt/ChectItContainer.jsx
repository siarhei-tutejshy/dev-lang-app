import React, { useEffect, useState } from 'react';
import ChectIt from './ChectIt';

const ChectItContainer = (props) => {
    let [currentWords, setCurrentWords] = useState([
        'rqndom',
        ' current',
        'random2',
    ]);
    
    useEffect(() => {
        if (props.itemsCount > 1){
          setCurrentWords([
                props.playWord.translate ,
                props.playWords[(props.wordIndex + 1)% props.itemsCount].translate ,
                props.playWords[(props.wordIndex + 2)% props.itemsCount].translate ,
            ].sort(() => Math.random() - 0.5));}
    }, [props.playWord]);

    useEffect(() => {
        (props.checkingWord !== props.playWord.translate || !props.checkingWord )
            ? props.isWordCorrect(false)
            : props.isWordCorrect(true);
    },[props.wordIndex]);

    return (
        <ChectIt
            playWord={props.playWord.word}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            currentWords={currentWords}
        />
    );
};



export default ChectItContainer
