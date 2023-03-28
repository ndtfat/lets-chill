import { useSelector } from 'react-redux';
import ConfigBar from '../components/ConfigBar';
import { themes } from '../assets/';
import { themeSelector } from '../redux/selectors';
import Background from '../components/Background';

function MainPage() {
    const theme = useSelector(themeSelector);

    return (
        <>
            <Background theme={theme.themeSRC} />
            <ConfigBar />
        </>
    );
}

export default MainPage;
