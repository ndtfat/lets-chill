import {
    IconArrowsMaximize,
    IconArrowsMinimize,
    IconBoxMultiple3,
    IconPlaylist,
} from '@tabler/icons-react';
import block from 'module-clsx';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { playlists, themes } from '../assets';
import styles from '../scss/configBar.module.scss';
import ConfigOption from './ConfigOption';

const clsx = block(styles);

function ConfigBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    const handleFullScreen = (e) => {
        const elem = document.documentElement;

        if (!fullscreen) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                /* IE11 */
                elem.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                /* IE11 */
                document.msExitFullscreen();
            }
        }
        setFullscreen((prev) => !prev);
    };

    return (
        <motion.div
            className={clsx('wrapper')}
            initial={{ x: '-100px', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className={clsx('optionBar-container', { open: isOpen }, 'primary-bkg')}>
                <div className={clsx('option-container')}>
                    <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={clsx('config-option')}
                    >
                        <ConfigOption isOpen={isOpen} icon="esc" />
                    </div>
                    <div className={clsx('config-option')} onClick={handleFullScreen}>
                        <ConfigOption
                            icon={fullscreen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
                        />
                    </div>
                    <div className={clsx('config-option')}>
                        <ConfigOption list={themes} type="image" icon={<IconBoxMultiple3 />} />
                    </div>
                    <div className={clsx('config-option')}>
                        <ConfigOption list={playlists} type="list" icon={<IconPlaylist />} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ConfigBar;
