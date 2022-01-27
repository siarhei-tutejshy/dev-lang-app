import React, { useState } from 'react';
import s from './Learn.module.css';
import ProgressBar from './../UI/ProgressBar/ProgressBar';
import LearnItem from './LearnItem/LearnItem';
const Learn = (props) => {
    let itemsCount = props.lernWords.length;

    let width = 0;

    let [wordIndex, setwordIndex] = useState(0);

    width = (100 / itemsCount) * (wordIndex + 1);

    const changeWordIndex = () =>
        wordIndex === itemsCount - 1
            ? setwordIndex(0)
            : setwordIndex(wordIndex + 1);
    if (!props.lernWords || props.lernWords < 1) return <span className={s.noWords}>No words</span>;
    return (
        <div className={s.learn}>
            <ProgressBar width={width} />
            <LearnItem
                learnWords={props.lernWords}
                wordIndex={wordIndex}
                speakWord={props.speakWord}
            />
            <button className={s.btnNext} onClick={changeWordIndex}></button>
        </div>
    );
};

export default Learn;
