import Proptypes from 'prop-types';
import block from 'module-clsx';
import styles from '../../scss/button.module.scss';

const clsx = block(styles);

function Button({ icon, isRepeat, isPlaying, small = true, large = false }) {
    const className = clsx('btn', {
        small,
        large,
        playing: isPlaying,
        repeating: isRepeat,
    });

    return <div className={className}>{icon}</div>;
}

Button.prototype = {
    icon: Proptypes.node,
    small: Proptypes.bool,
    large: Proptypes.bool,
    isRepeat: Proptypes.bool,
    isPlaying: Proptypes.bool,
};

export default Button;
