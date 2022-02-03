import React from 'react';
import s from './ProgressBar.module.css';

const ProgressBar = ({ width }) => {
    return (
        <div className={s.progressBarContainer}>
            <div
                className={s.progressBar}
                style={{ width: `${width}vw` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
