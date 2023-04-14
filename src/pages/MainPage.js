import { createContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
    Audio,
    Background,
    ConfigBar,
    ControlBar,
    ShortcutsBoard,
    SongInfo,
    Title,
} from '../components';

export const context = createContext();

function MainPage() {
    const [showShortcuts, setShowShortcuts] = useState(false);
    const handleShowShortcuts = () => {
        setShowShortcuts((prev) => !prev);
    };

    return (
        <>
            <Title />
            <AnimatePresence>
                {showShortcuts && (
                    <ShortcutsBoard key="shortcutsBoard" onClick={() => setShowShortcuts(false)} />
                )}
            </AnimatePresence>
            <Background />
            <Audio />
            <ConfigBar onShowShortcuts={handleShowShortcuts} />
            <ControlBar />
            <SongInfo />
        </>
    );
}

export default MainPage;
