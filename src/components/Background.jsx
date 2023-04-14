import block from 'module-clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from '../redux/selectors';
import styles from '../scss/background.module.scss';

const clsx = block(styles);

function Background() {
    const theme = useSelector(themeSelector);

    return (
        <div key={Math.random()}>
            <video className={clsx('background')} src={theme.themeSRC} loop muted autoPlay />
            {/* <img className={clsx('title')} src={theme.titleImg} alt="background-title" /> */}
        </div>
    );
}

export default memo(Background);
