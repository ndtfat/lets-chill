import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import block from 'module-clsx';
import styles from '../scss/songInfo.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { songSelector } from '../redux/selectors';
import ListBox from './ListBox';
import { useState } from 'react';

const clsx = block(styles);

function SongInfo({ ...props }) {
    const songData = useSelector(songSelector);
    const songInfo = songData.playlist[songData.currentSongIndex];
    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = () => {
        setShowDetail((prev) => !prev);
    };

    const imgRef = useRef();
    useEffect(() => {
        imgRef.current.style.animationPlayState = songData.playPause ? 'running' : 'paused';
    }, [songData.playPause]);

    return (
        <div className={clsx('wrapper')}>
            <motion.div
                className={clsx('sub-detail_wrapper')}
                onClick={handleShowDetail}
                initial={{ x: '-100px', opacity: 0 }}
                animate={{ x: '0', opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <img
                    ref={imgRef}
                    className={clsx('song-thumb')}
                    src={songInfo.thumbnailURL}
                    alt="song-thumbnail"
                ></img>
                <p className={clsx('song-info')}>
                    {songInfo.name} <br /> <span>{songInfo.singer}</span>
                </p>

                <div className={clsx('current-playlist')} onClick={(e) => e.stopPropagation()}>
                    <ListBox list={songData.playlist} type="song-list" />
                </div>
            </motion.div>

            <AnimatePresence>
                {showDetail && (
                    <motion.div
                        key="songInfoTag"
                        className={clsx('detail-wrapper')}
                        onClick={handleShowDetail}
                        initial={{ x: '-140%', y: '122%', rotateY: 180, scale: 0, opacity: 0 }}
                        animate={{ x: '-50%', y: '-50%', rotateY: 360, scale: 1, opacity: 1 }}
                        exit={{ x: '-140%', y: '122%', rotateY: 180, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={songInfo.thumbnailURL}></img>
                        <div className={clsx('song-detail')}>
                            <p>{songInfo.name}</p>
                            <p>
                                <span>perfomer: </span>
                                {songInfo.singer}
                            </p>
                            <p>
                                <span>songwriter: </span>
                                {songInfo.songwriter}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SongInfo;
