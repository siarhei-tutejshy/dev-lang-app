import s from './PointsBlock.module.css';
import React from 'react';


const PointsBlock = ({totalPoints}) => {
    return (
        <div className={s.pointsBlock}>
            <span>Common expiriense</span>
            <h3>{totalPoints} points</h3>
        </div>
    );
};

export default PointsBlock;
