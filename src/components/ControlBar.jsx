import {
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
    IconPlayerSkipBackFilled,
    IconPlayerSkipForwardFilled,
    IconRepeat,
    IconVolume,
    IconVolume2,
    IconVolume3,
    IconVolumeOff,
} from '@tabler/icons-react';
import block from 'module-clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { songSelector } from '../redux/selectors';
import songSlice from '../redux/reducerSlices/songSlice';
import styles from '../scss/controlBar.module.scss';
import Button from './Button';
import Range from './Range';

const clsx = block(styles);

function ControlBar() {
    // console.log('controlBar re-render');
    const dispatch = useDispatch();
    const song = useSelector(songSelector);

    const handleNextSong = () => {
        dispatch(songSlice.actions.nextSong());
        dispatch(songSlice.actions.playPause(true));
        dispatch(songSlice.actions.updateProgress(0));
    };
    const handlePrevSong = () => {
        dispatch(songSlice.actions.prevSong());
        dispatch(songSlice.actions.playPause(true));
        dispatch(songSlice.actions.updateProgress(0));
    };
    const handleAdjustVolume = (e) => {
        dispatch(songSlice.actions.adjustVolume(e.target.value / 1000000000000));
        song.muted && dispatch(songSlice.actions.muted());
    };
    const handleMuted = () => {
        dispatch(songSlice.actions.muted());
    };
    const handleVolumeIcon = () => {
        const volume = song.volume;
        if (!song.muted) {
            if (volume === 0) {
                return <IconVolume3 />;
            }
            if (volume < 0.5 && volume > 0) {
                return <IconVolume2 />;
            }
            if (volume >= 0.5) {
                return <IconVolume />;
            }
        } else {
            return <IconVolumeOff />;
        }
    };
    const handleAdjustProgress = (e) => {
        console.log(e.target.value);
        dispatch(
            songSlice.actions.updateProgress({
                value: e.target.value,
                userAdjust: true,
            }),
        );
    };

    useEffect(() => {
        const handleKeyboardEvent = (e) => {
            if (e.ctrlKey) {
                switch (e.code) {
                    // next / back / song
                    case 'ArrowRight': {
                        handleNextSong();
                        dispatch(songSlice.actions.playPause(true));
                        break;
                    }
                    case 'ArrowLeft': {
                        handlePrevSong();
                        break;
                    }
                    default:
                        break;
                }
            } else {
                switch (e.code) {
                    // play / pause
                    case 'Space': {
                        dispatch(songSlice.actions.playPause(!song.playPause));
                        break;
                    }
                    // adjust progress
                    case 'ArrowRight': {
                        dispatch(
                            songSlice.actions.updateProgress({
                                value: song.currentTime.value + 1000000,
                                userAdjust: true,
                            }),
                        );
                        break;
                    }
                    case 'ArrowLeft': {
                        dispatch(
                            songSlice.actions.updateProgress({
                                value: song.currentTime.value - 1000000,
                                userAdjust: true,
                            }),
                        );
                        break;
                    }
                    // up / down volume
                    case 'ArrowUp': {
                        dispatch(songSlice.actions.adjustVolume(song.volume + 0.1));
                        break;
                    }
                    case 'ArrowDown': {
                        dispatch(songSlice.actions.adjustVolume(song.volume - 0.1));
                        break;
                    }
                    default:
                        break;
                }
            }
        };

        document.addEventListener('keyup', handleKeyboardEvent);
        return () => {
            document.removeEventListener('keyup', handleKeyboardEvent);
        };
        // eslint-disable-next-line
    }, [song.playPause, song.currentTime.value, song.volume]);

    return (
        <motion.div
            className={clsx('wrapper')}
            initial={{
                // x: '-50%',
                y: '100px',
                opacity: 0,
                transition: { duration: 0.6, delay: 0.8 },
            }}
            animate={{
                // x: '-50%',
                y: '0',
                opacity: 1,
                transition: { duration: 0.6, delay: 0.8 },
            }}
        >
            <div className={clsx('control-bar')}>
                <div
                    onClick={() => dispatch(songSlice.actions.repeat())}
                    className={clsx('control-btn')}
                >
                    <Button isRepeat={song.repeat} small icon={<IconRepeat />} />
                </div>
                <div onClick={handlePrevSong} className={clsx('control-btn')}>
                    <Button small icon={<IconPlayerSkipBackFilled />} />
                </div>
                <div
                    className={clsx('control-btn')}
                    onClick={() => dispatch(songSlice.actions.playPause(!song.playPause))}
                >
                    <Button
                        isPlaying={song.playPause}
                        large
                        icon={song.playPause ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
                    />
                </div>
                <div onClick={handleNextSong} className={clsx('control-btn')}>
                    <Button small icon={<IconPlayerSkipForwardFilled />} />
                </div>
                <div className={clsx('control-btn')}>
                    <Button onClick={handleMuted} small icon={handleVolumeIcon()} />
                    <div className={clsx('control-volume')}>
                        <Range
                            vertical
                            value={song.volume * 1000000000000}
                            onInput={handleAdjustVolume}
                        />
                    </div>
                </div>
                <div className={clsx('progress')}>
                    <Range
                        horizontal
                        value={song.currentTime.value}
                        onInput={handleAdjustProgress}
                    />
                </div>
            </div>
        </motion.div>
    );
}

ControlBar.prototype = {};

export default ControlBar;
