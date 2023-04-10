import Proptypes from 'prop-types';
import block from 'module-clsx';
import styles from '../scss/range.module.scss';

const clsx = block(styles);

function Range({ long = false, vertical = false, horizontal = false, value = 0, ...props }) {
    const className = clsx('range', {
        vertical,
        horizontal,
        long,
    });

    return (
        <div className={clsx('wrapper')}>
            <input
                {...props}
                className={className}
                value={value > 1000000000000 ? 0 : value}
                type="range"
                min="0"
                max="1000000000000"
            />
        </div>
    );
}

Range.prototype = {
    long: Proptypes.bool,
    vertical: Proptypes.bool,
    horizontal: Proptypes.bool,
    value: Proptypes.number.isRequired,
    props: Proptypes.any,
};

export default Range;
