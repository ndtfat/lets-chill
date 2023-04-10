import Proptypes from 'prop-types';
import block from 'module-clsx';
import styles from '../scss/keycap.module.scss';

const clsx = block(styles);

function Keycap({ shape = 'square', children }) {
    return (
        <div
            className={clsx('wrapper', {
                square: shape === 'square',
                rectangle: shape === 'rectangle',
            })}
        >
            {children}
        </div>
    );
}

Keycap.prototype = {
    shape: Proptypes.string.isRequired,
};

export default Keycap;
