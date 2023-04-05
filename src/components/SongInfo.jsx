import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import block from 'module-clsx';
import styles from '../scss/songInfo.module.scss';
import { motion } from 'framer-motion';
import { songSelector } from '../redux/selectors';

const clsx = block(styles);

function SongInfo() {
    const songData = useSelector(songSelector);
    const songInfo = songData.playlist[songData.currentSongIndex];

    const imgRef = useRef();
    useEffect(() => {
        imgRef.current.style.animationPlayState = songData.playPause ? 'running' : 'paused';
    }, [songData.playPause]);

    return (
        <motion.div
            className={clsx('wrapper')}
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
            <p className={clsx('song-info')}>{`${songInfo.name} - ${songInfo.singer}`}</p>
        </motion.div>
    );
}

export default SongInfo;
