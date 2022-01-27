import React, { useState } from 'react';
import {useEffect } from 'react';

const LearnItem = ({learnWords, wordIndex, speakWord}) => {
    

    useEffect(()=> {speakWord(learnWords[wordIndex].translate)}, [wordIndex])
    if(!learnWords|| learnWords.length < 1) return <span>no words for learning</span>
    return (
        <section >
            <span>{learnWords[wordIndex].word}</span>
            <h3>{learnWords[wordIndex].translate}</h3>
        </section>
    );
};

export default LearnItem;
