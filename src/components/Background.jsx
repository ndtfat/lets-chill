import { memo } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from '../redux/selectors';
import block from 'module-clsx';
import styles from '../scss/background.module.scss';
import { motion } from 'framer-motion';

const clsx = block(styles);

function Background() {
    const theme = useSelector(themeSelector);

    return (
        <>
            <motion.video
                className={clsx('background')}
                src={theme.themeSRC}
                loop
                muted
                autoPlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
            <img className={clsx('title')} src={theme.titleImg} alt="background-title" />
        </>
    );
}

export default memo(Background);
