import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
    addPlayWords,
    addWordCheck,
} from '../../../../state/reducers/playWordsReducer';
import { addTotalPoints } from '../../../../state/reducers/progressReducer';
import WriteIt from './WriteIt';
import EndGameWidget from '../../../UI/EndGameWidget/EndGameWidget';
import {
    library,
    playWords as playWordsSelector,
} from '../../../../state/selectors/slelectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const WriteItContainer = (props) => {
    useEffect(() => {
        
        (props.checkingWord !== props.playWord.translate || !props.checkingWord )
            ? props.isWordCorrect(false)
            : props.isWordCorrect(true);
    },[props.wordIndex]);

    return (
        <WriteIt
            playWord={props.playWord.word}
            changeWordIndex={props.changeWordIndex}
            addWordCheck={props.addWordCheck}
            
        />
    );
};

export default WriteItContainer;
