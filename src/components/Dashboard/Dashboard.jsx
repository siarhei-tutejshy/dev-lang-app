import s from './Dashboard.module.css'
import  React  from 'react';
import GameBlock from './GamesBlock/GameBlock';
import PointsBlock from './PointsBlock/PointsBlock';
import LevelBlock from './LevelBlock/LevelBlock';
const Dashboard =(props) => {

    return <div className={s.dashboardContainer}>
        <GameBlock />
        <PointsBlock totalPoints={props.totalPoints}/>
        <LevelBlock />
    </div>

}

export default Dashboard
