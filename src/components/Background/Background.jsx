import block from 'module-clsx';
import styles from './style.module.scss';

const clsx = block(styles);

function Background({ theme }) {
    console.log('theme rerender');
    return <video loop muted autoPlay src={theme} className={clsx('background')} />;
}

export default Background;
