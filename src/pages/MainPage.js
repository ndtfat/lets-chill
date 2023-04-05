import { Background, ControlBar, ConfigBar, SongInfo, Audio } from '../components';

function MainPage() {
    console.log('Main Page');

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
