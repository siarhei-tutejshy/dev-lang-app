import s from './LevelBlock.module.css';
import React from 'react';

const LevelBlock = () => {
    return (
        <div className={s.levelBlock}>
            <span>level</span>
            <h3>7 level</h3>
            <p>play new words</p>
            <div className={s.levelBackground}></div>
        </div>
    );
};

export default LevelBlock;
