import React, { useState } from 'react';
import {useEffect } from 'react';

const LearnItem = ({learnWords, wordIndex, speakWord}) => {
    useEffect(()=> {speakWord(learnWords[wordIndex].translate)}, [wordIndex])
    return (
        <section >
            <span>{learnWords[wordIndex].word}</span>
            <h3>{learnWords[wordIndex].translate}</h3>
        </section>
    );
};

export default LearnItem;
