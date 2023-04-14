import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import block from 'module-clsx';
import styles from '../scss/startPage.module.scss';
import { motion } from 'framer-motion';
import { startPageVid } from '../assets';

const clsx = block(styles);

const cat = {
    initial: {
        x: '-500px',
        opacity: 0,
    },
    animate: {
        x: '0',
        rotate: [0, 360],
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        rotate: [0, 360],
        scale: 3,
        opacity: 0,
        transition: {
            duration: 2,
            delay: 13,
        },
    },
};

const btn = {
    initial: {
        y: '-100px',
        opacity: 0,
    },
    animate: {
        y: '0',
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.8,
        },
    },
    exit: {
        y: '-100px',
        opacity: 0,
        transition: {
            delay: 13,
            duration: 0.8,
        },
    },
};

function StartPage() {
    const videoRef = useRef();
    const linkRef = useRef();

    const handleClick = () => {
        videoRef.current.play();
    };

    useEffect(() => {
        videoRef.current.onplaying = () => {
            console.log('play');
            setTimeout(() => {
                linkRef.current.click();
            }, 0);
        };
    });

    return (
        <div className={clsx('wrapper')}>
            <motion.video
                ref={videoRef}
                className={clsx('video')}
                src={startPageVid}
                variants={cat}
                initial="initial"
                animate="animate"
                exit="exit"
            />
            <motion.button
                className={clsx('start-btn')}
                onClick={handleClick}
                variants={btn}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <p className={clsx('text-static')}>Let's</p>
                <motion.div exit={{ y: '-50px' }}>
                    <p>click</p>
                    <p className={clsx('text-dynamic')}>chill</p>
                </motion.div>
            </motion.button>
            <Link ref={linkRef} to="/main"></Link>
        </div>
    );
}

export default StartPage;
