import React from 'react';
import s from './LevelBlock.module.css';

const LevelBlock = (props) => {
    return (
        <div className={s.levelBlock}>
            <span>level</span>
            <h3>{(0.2*Math.sqrt(props.totalPoints)).toFixed()} level</h3>
            <p>play new words</p>
            <div className={s.levelBackground}></div>
        </div>
    );
};

export default LevelBlock;
