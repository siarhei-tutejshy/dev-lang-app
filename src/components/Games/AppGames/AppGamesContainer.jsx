import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addPlayWords, addWordCheck} from '../../../state/reducers/playWordsReducer';
import { addTotalPoints } from '../../../state/reducers/progressReducer';
import {checkingWordSelector,library, playWords as playWordsSelector,totalPointsSelector,} from '../../../state/selectors/slelectors';
import EndGameWidget from '../../UI/EndGameWidget/EndGameWidget';
import NavGames from '../../UI/NavGames/NavGames';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import { gameComponentsData } from '../../componentsData/componentsData';

const AppGamesContainer = () => {
    let libraryList = useSelector(library);
    let playWords = useSelector(playWordsSelector);
    let checkingWord = useSelector(checkingWordSelector);
    let totalPoints = useSelector(totalPointsSelector);

    let params = useParams();
    let dispatch = useDispatch();

    let [width, setWidth] = useState(0);
    let [wordIndex, setwordIndex] = useState(0);
    let [playWord, setPlayWord] = useState({ word: 'no words', translate: '' });
    let [stats, setStats] = useState({ error: 0, right: 0 });
    let [endGameActive, setEndGameActive] = useState(false);
    
    let itemsCount = playWords.length;

    const changeWordIndex = () => {
        if (wordIndex === itemsCount - 1) {
            setwordIndex(0);
            setEndGameActive(true);
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
        dispatch(addPlayWords(libraryList.sort(() => Math.random() - 0.5).slice(-10)));
        setWidth((100 / itemsCount) * (wordIndex + 1));

        return () => addWordForCheck('');
    }, []);

    useEffect(() => {
        (itemsCount > 1) && setPlayWord(playWords[wordIndex]);
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

    return (
        <div>
            <ProgressBar width={width} />
            <NavGames stats={stats} totalPoints={totalPoints} />
            {gameComponentsData.map(
                (game, index) =>
                    game.path === params.gameName && (
                        <game.gameComponentName
                            key={index}
                            wordIndex={wordIndex}
                            playWord={playWord}
                            playWords={playWords}
                            itemsCount={itemsCount}
                            changeWordIndex={changeWordIndex}
                            addWordCheck={addWordForCheck}
                            isWordCorrect={isWordCorrect}
                            checkingWord={checkingWord}
                        />))}
                    
            <EndGameWidget
                stats={stats}
                totalPoints={totalPoints}
                endGameActive={endGameActive}
                setEndGameActive={setEndGameActive}
            />
        </div>
    );
};

export default AppGamesContainer;
