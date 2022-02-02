import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavGames from '../UI/NavGames/NavGames';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import ChectItContainer from './AppGames/CheckIt/ChectItContainer';
import WriteItContainer from './AppGames/WriteIt/WriteItContainer';


import {
    addPlayWords,
    addWordCheck,
    checkCorrectWord,
} from './../../state/reducers/playWordsReducer';
import { addTotalPoints } from '../../state/reducers/progressReducer';

import EndGameWidget from '../UI/EndGameWidget/EndGameWidget';
import {
    checkingWordSelector,
    library,
    playWords as playWordsSelector,
    totalPointsSelector,
} from '../../state/selectors/slelectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SpeakItContainer from './AppGames/SpeakIt/SpeakItContainer';
import PutItContainer from './AppGames/PutIt/PutItContainer';

const GameContainer = () => {
    let params = useParams();

    let libraryList = useSelector(library);
    let playWords = useSelector(playWordsSelector);
    let checkingWord = useSelector(checkingWordSelector);
    let totalPoints = useSelector(totalPointsSelector);

    let dispatch = useDispatch();

    let itemsCount = playWords.length;

    let [width, setWidth] = useState(0);
    let [wordIndex, setwordIndex] = useState(0);
    let [playWord, setPlayWord] = useState({ word: 'no words',translate: '' });
    let [stats, setStats] = useState({ error: 0, right: 0 });

    const changeWordIndex = () => {
        if (wordIndex === itemsCount - 1) {
            setwordIndex(0);
        } else {
            setwordIndex(wordIndex + 1);
        }
        setWidth((100 / itemsCount) * (wordIndex + 1));
        
    };

    const addWordForCheck = (word) => {
        dispatch(addWordCheck(word));
    };

    const isWordCorrect = (correct) => {
        correct
            ? setStats({ ...stats, right: stats.right + 1 })
            : setStats({ ...stats, error: stats.error + 1 });
    };

    useEffect(() => {
        dispatch(
            addPlayWords(libraryList.sort(() => Math.random() - 0.5).slice(-10))
        );
        return () => addWordForCheck('')
    }, []);

    useEffect(() => {
        itemsCount > 1 && setPlayWord(playWords[wordIndex])
    }, [playWords]);

    useEffect(() => {
        if (playWords.length > 1) {
            setPlayWord({
                word: playWords[wordIndex].word.toLowerCase(),
                translate: playWords[wordIndex].translate.toLowerCase(),
            });
        }
        
    }, [wordIndex]);

    useEffect(() => {
        if (stats.right > 0) {
            ++totalPoints;
            dispatch(addTotalPoints(totalPoints));
        }
    }, [stats.right]);
    
    //    if( wordIndex === itemsCount - 1) return <EndGameWidget stats={stats} totalPoints={totalPoints} />
    return (
        <div>
            <ProgressBar width={width} />
            <NavGames stats={stats} totalPoints={totalPoints} />

            {(params.gameName === 'write-it' && (
                <WriteItContainer
                    wordIndex={wordIndex}
                    playWord={playWord}
                    changeWordIndex={changeWordIndex}
                    addWordCheck={addWordForCheck}
                    isWordCorrect={isWordCorrect}
                    checkingWord={checkingWord}
                />
            )) ||
                (params.gameName === 'check-it' && (
                    <ChectItContainer
                        wordIndex={wordIndex}
                        playWord={playWord}
                        playWords={playWords}
                        itemsCount={itemsCount}
                        changeWordIndex={changeWordIndex}
                        addWordCheck={addWordForCheck}
                        isWordCorrect={isWordCorrect}
                        checkingWord={checkingWord}
                    />
                )) || (params.gameName === 'speak-it' && (
                    <SpeakItContainer
                        wordIndex={wordIndex}
                        playWord={playWord}
                        playWords={playWords}
                        itemsCount={itemsCount}
                        changeWordIndex={changeWordIndex}
                        addWordCheck={addWordForCheck}
                        isWordCorrect={isWordCorrect}
                        checkingWord={checkingWord}
                    />)) ||
                    (params.gameName === 'put-it' && (
                        <PutItContainer
                            wordIndex={wordIndex}
                            playWord={playWord}
                            playWords={playWords}
                            itemsCount={itemsCount}
                            changeWordIndex={changeWordIndex}
                            addWordCheck={addWordForCheck}
                            isWordCorrect={isWordCorrect}
                            checkingWord={checkingWord}
                        />
                    ))}
        </div>
    );
};

export default GameContainer;
