import {
    IconRepeat,
    IconPlayerSkipBackFilled,
    IconPlayerSkipForwardFilled,
    IconVolume,
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { useState } from 'react';
import block from 'module-clsx';
import styles from '../../scss/controlBar.module.scss';
import Button from '../Button/Button';

const clsx = block(styles);

function ControlBar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);

    const handlePlayBtn = () => {
        setIsPlaying((prev) => !prev);
    };

    const handleRepeatBtn = () => {
        setIsRepeat((prev) => !prev);
    };

    return (
        <div className={clsx('control-bar')}>
            <div onClick={handleRepeatBtn} className={clsx('control-btn')}>
                <Button isRepeat={isRepeat} small icon={<IconRepeat />} />
            </div>
            <div className={clsx('control-btn')}>
                <Button small icon={<IconPlayerSkipBackFilled />} />
            </div>
            <div onClick={handlePlayBtn} className={clsx('control-btn')}>
                <Button
                    isPlaying={isPlaying}
                    large
                    icon={isPlaying ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
                />
            </div>
            <div className={clsx('control-btn')}>
                <Button small icon={<IconPlayerSkipForwardFilled />} />
            </div>
            <div className={clsx('control-btn')}>
                <Button small icon={<IconVolume />} />
            </div>
        </div>
    );
}

ControlBar.prototype = {};

export default ControlBar;
