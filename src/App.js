import { Routes, Route, useLocation } from 'react-router-dom';

import MainPage from './pages/MainPage';
import StartPage from './pages/StartPage';
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" Component={StartPage} />
                <Route path="/main" Component={MainPage} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
