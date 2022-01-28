import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import LibraryContainer from './components/Library/LibraryContainer';
import LearnContainer from './components/Learn/LearnContainer';
import GamesContainer from './components/Games/GamesContainer';
import WriteIt from './components/Games/AppGames/WriteIt/WriteIt';
import WriteContainer from './components/Games/AppGames/WriteIt/WriteItContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <Routes>
                    <Route path="/dashboard" element={<DashboardContainer />} />
                    <Route path="/" element={<DashboardContainer />} />
                    <Route path="/games" element={<GamesContainer />} />
                    <Route path="/game/write-it" element={<WriteContainer />} />
                    <Route path="/library" element={<LibraryContainer />} />
                    <Route path="/learn" element={<LearnContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
export default App;
