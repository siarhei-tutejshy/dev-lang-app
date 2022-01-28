import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
    addPlayWords,
    addWordCheck,
} from '../../../../state/reducers/playWordsReducer';
import { addTotalPoints } from '../../../../state/reducers/progressReducer';
import WriteIt from './WriteIt';
import { randomWordsContainer } from './../../../../hoc/randomWords';

const WriteItContainer = (props) => {
    let itemsCount = props.playWords.length;
let [lin, setLinn]=useState(0)
    let [width, setWidth] = useState(0);
    let [wordIndex, setwordIndex] = useState(0);
    let [playWord, setPlayWord] = useState({ word: 'no words' });
    let [stats, setStats] = useState({ error: -1, right: 0 });

    const changeWordIndex = () => {

        if(wordIndex === itemsCount -1 ) {
            setwordIndex(0);
            
        } else {setwordIndex(wordIndex + 1)

        }
        
    };

    useEffect(() => {
        let playWords = props.library
            .sort(() => Math.random() - 0.5)
            .slice(-10);
        props.addPlayWords(playWords);
        setLinn(1)
        
    }, []);
    useEffect(() => {
        if (props.playWords.length > 1) {
            setPlayWord({
                word: props.playWords[wordIndex].word.toLowerCase(),
                translate: props.playWords[wordIndex].translate.toLowerCase(),
            });
        }
        
    }, [lin]);

    useEffect(() => {
        if (props.playWords.length > 1) {
            setPlayWord({
                word: props.playWords[wordIndex].word.toLowerCase(),
                translate: props.playWords[wordIndex].translate.toLowerCase(),
            });
        }
        setWidth((100 / itemsCount) * (wordIndex +1 ));

        playWord.translate === props.checkingWord
            ? setStats({ ...stats, right: stats.right + 1 })
            : setStats({ ...stats, error: stats.error + 1 });
            if(wordIndex === 0) return <Navigate to="/"></Navigate>;
    }, [wordIndex]);

    useEffect(() => {
        if (stats.right > 0) {
            let totalPoints = props.totalPoints;
            ++totalPoints;
            props.addTotalPoints(totalPoints);
        }
    }, [stats.right]);

    // if (wordIndex === itemsCount - 1) return <Navigate to="/"></Navigate>;
console.log(itemsCount, wordIndex)
    return (
        <WriteIt
            totalPoints={props.totalPoints}
            stats={stats}
            playWord={playWord.word}
            width={width}
            changeWordIndex={changeWordIndex}
            addWordCheck={props.addWordCheck}
        />
    );
};

let mapStateToProps = (state) => {
    return {
        library: state.library.library,
        playWords: state.playWords.playWords,
        checkingWord: state.playWords.checkingWord,
        totalPoints: state.progress.totalPoints,
    };
};

export default connect(mapStateToProps, {
    addPlayWords,
    addWordCheck,
    addTotalPoints,
})(WriteItContainer);
