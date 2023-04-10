import { createContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background, ControlBar, ConfigBar, SongInfo, Audio, ShortcutsBoard } from '../components';

export const context = createContext();

function MainPage() {
    const [showShortcuts, setShowShortcuts] = useState(false);
    const handleShowShortcuts = (e) => {
        setShowShortcuts((prev) => !prev);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {showShortcuts && <ShortcutsBoard onClick={() => setShowShortcuts(false)} />}
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
