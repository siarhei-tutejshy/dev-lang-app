import ChectItContainer from '../Games/AppGames/CheckIt/ChectItContainer'
import WriteItContainer from '../Games/AppGames/WriteIt/WriteItContainer';
import SpeakItContainer from '../Games/AppGames/SpeakIt/SpeakItContainer';
import PutItContainer from '../Games/AppGames/PutIt/PutItContainer';
import ListenItContainer from '../Games/AppGames/ListenIt/ListenItContainer';
import GuessSprintContainer from '../Games/AppGames/GuessSprint/GuessSprintContainer';


export let gameComponentsData = [
    { path: 'write-it', gameComponentName: WriteItContainer },
    { path: 'check-it', gameComponentName: ChectItContainer },
    { path: 'speak-it', gameComponentName: SpeakItContainer },
    { path: 'put-it', gameComponentName: PutItContainer },
    { path: 'listen-it', gameComponentName: ListenItContainer },
    { path: 'guess-sprint', gameComponentName: GuessSprintContainer },
];