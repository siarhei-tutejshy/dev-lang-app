import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import { totalPointsSelector } from '../../state/selectors/slelectors';
import { randomizer } from '../../utils/utils';

const DashBoardContainer = () => {
    let totalPoints = useSelector(totalPointsSelector);
    
    const [pathList, setPathList] = useState([
        'write-it',
        'check-it',
        'speak-it',
        'put-it',
        'listen-it',
        'guess-sprint',
    ]);

    const [randomGame, setRandomgame] = useState(
        pathList[randomizer(0, pathList.length - 1)]
    );

    return <Dashboard totalPoints={totalPoints} getRandomGame={randomGame} />;
};
export default DashBoardContainer;
