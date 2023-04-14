import {
    IconArrowNarrowDown,
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconArrowNarrowUp,
    IconLetterM,
    IconLetterR,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import block from 'module-clsx';
import styles from '../scss/shortcutsBoard.module.scss';
import ShortcutInstruction from './ShortcutInstuctrion';

const clsx = block(styles);
const overlay = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const board = {
    initial: { y: '-70%', x: '-50%', opacity: 0 },
    animate: { y: '-50%', x: '-50%', opacity: 1 },
    exit: { y: '-70%', x: '-50%', opacity: 0 },
};

function ShortcutsBoard({ ...props }) {
    return (
        <div {...props} className={clsx('wrapper')}>
            <motion.div
                className={clsx('overlay')}
                variants={overlay}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
            ></motion.div>
            <motion.div
                className={clsx('board')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                variants={board}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
            >
                <h3 className={clsx('title')}>Keyboard shortcuts</h3>
                <ul className={clsx('instruction-list')}>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction
                            icons={['ctrl', <IconArrowNarrowRight />]}
                            desc="Play next track"
                        />
                    </li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction icons={['space']} desc="Play next track" />
                    </li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction
                            icons={['ctrl', <IconArrowNarrowLeft />]}
                            desc="Play previuos track"
                        />
                    </li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction
                            icons={[<IconArrowNarrowRight />]}
                            desc="Seek forward"
                        />
                    </li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction icons={[<IconLetterM />]} desc="Muted" />
                    </li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction
                            icons={[<IconArrowNarrowLeft />]}
                            desc="Seek backward"
                        />
                    </li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction icons={[<IconLetterR />]} desc="Repeat" />
                    </li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction
                            icons={[<IconArrowNarrowUp />]}
                            desc="Increase volume"
                        />
                    </li>
                    <li className={clsx('instruction')}></li>
                    <li className={clsx('instruction')}>
                        <ShortcutInstruction
                            icons={[<IconArrowNarrowDown />]}
                            desc="Decrease volume"
                        />
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}

export default ShortcutsBoard;
