import React from 'react';
import s from './Dashboard.module.css';
import GameBlock from './GamesBlock/GameBlock';
import PointsBlock from './PointsBlock/PointsBlock';
import LevelBlock from './LevelBlock/LevelBlock';

const Dashboard = (props) => {
    return (
        <div className={s.dashboardContainer}>
            <GameBlock getRandomGame={props.getRandomGame} />
            <PointsBlock totalPoints={props.totalPoints} />
            <LevelBlock totalPoints={props.totalPoints} />
        </div>
    );
};

export default Dashboard;
