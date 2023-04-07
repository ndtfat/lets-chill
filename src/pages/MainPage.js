import { Background, ControlBar, ConfigBar, SongInfo, Audio } from '../components';

function MainPage() {
    return (
        <>
            <Background />
            <Audio />
            <ConfigBar />
            <ControlBar />
            <SongInfo />
        </>
    );
}

export default MainPage;
