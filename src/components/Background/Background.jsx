import block from 'module-clsx';
import styles from '../../scss/background.module.scss';

const clsx = block(styles);

function Background({ theme }) {
    console.log('theme rerender');
    return (
        <>
            <video className={clsx('background')} src={theme.themeSRC} loop muted autoPlay />
            <img className={clsx('title')} src={theme.titleImg} />
        </>
    );
}

export default Background;
