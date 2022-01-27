import React from 'react';
import Games from './Games'

import checkTheCorrectOne from '../../assets/img/check-the-correct-one.svg'
import listenAndGuess from '../../assets/img/listen-and-guess.svg'
import listenSprint from '../../assets/img/listen-sprint.svg'
import putTranslation from '../../assets/img/put-translation.svg'
import rememberTranslation from '../../assets/img/remember-translation.svg'
import selectTranslation from '../../assets/img/select-translation.svg'
import speakAndCheck from '../../assets/img/speak-and-check.svg'
import sprintGuess from '../../assets/img/sprint-guess.svg'
import writeTranslation from '../../assets/img/write-translation.svg'
const GamesContainer = () => {

    const GAMES = [
        {gameId: '001', img: checkTheCorrectOne, path: 'check-it', name: 'Check the correct one', description: 'Check the correct one' },
        {gameId: '002', img: listenAndGuess, path: 'listen-it', name: 'Gueass and Listen', description: 'Gueass and Listen' },
        {gameId: '003', img: listenSprint, path: 'listen-sprint', name: 'Sprint by listen', description: 'Sprint by listen' },
        {gameId: '004', img: putTranslation, path: 'put-it', name: 'Put together a translation', description: 'Put together a translation' },
        {gameId: '005', img: rememberTranslation, path: 'remember-it', name: 'Remember Translation', description: 'Remember Translation' },
        {gameId: '006', img: selectTranslation, path: 'select-it', name: 'Select the Right Translation', description: 'Select the Right Translation' },
        {gameId: '007', img: speakAndCheck, path: 'speak-it', name: 'Speak and Check', description: 'Speak and Check' },
        {gameId: '008', img: sprintGuess, path: 'guess-sprint', name: 'Sprint by Guessing', description: 'Sprint by Guessing' },
        {gameId: '009', img: writeTranslation, path: 'write-it', name: 'Write the translation', description: 'Write the translation' }
    ] 
    
    return (
        <Games renderData={GAMES}/>
    );
};

export default GamesContainer;
