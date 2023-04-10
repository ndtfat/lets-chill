import block from 'module-clsx';
import styles from '../scss/shortcutInstruction.module.scss';
import Proptypes from 'prop-types';
import { IconArrowNarrowUp } from '@tabler/icons-react';
import Keycap from './Keycap';

const clsx = block(styles);

function ShortcutInstruction({ icons, desc }) {
    return (
        <div className={clsx('wrapper')}>
            <div className={clsx('instruction_icon')}>
                {icons.map((icon) => (
                    <Keycap key={icon} shape={typeof icon === 'string' ? 'rectangle' : 'square'}>
                        {icon}
                    </Keycap>
                ))}
            </div>

            <p className={clsx('instruction_desc')}>{desc}</p>
        </div>
    );
}

ShortcutInstruction.prototype = {
    icons: Proptypes.array.isRequired,
    desc: Proptypes.string.isRequired,
};

export default ShortcutInstruction;
