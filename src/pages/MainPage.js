import { useSelector } from 'react-redux';
import { themeSelector } from '../redux/selectors';
import Background from '../components/Background';
import ConfigBar from '../components/ConfigBar';
import ControlBar from '../components/ControlBar/ControlBar';

function MainPage() {
    const theme = useSelector(themeSelector);

    return (
        <>
            <Background theme={theme} />
            <ConfigBar />
            <ControlBar />
        </>
    );
}

export default MainPage;
