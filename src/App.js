
import  React  from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LibraryContainer from './components/Library/LibraryContainer';
import LearnContainer from './components/Learn/LearnContainer';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            
            <Routes >
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/games' element={<Dashboard />}/>
                <Route path='/library' element={<LibraryContainer />}/>
                <Route path='/learn' element={<LearnContainer />}/>
            </Routes>


        </div>
        </BrowserRouter>
    );
};
export default App;
