import { IconArrowsMaximize, IconArrowsMinimize, IconBoxMultiple3, IconPlaylist } from '@tabler/icons-react';
import block from 'module-clsx';
import { useEffect, useState } from 'react';
import { playlists, themes } from '../../assets';
import ConfigOption from '../ConfigOption/ConfigOption';
import styles from '../../scss/configBar.module.scss';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

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
        <div className="wrapper">
            <div className={clsx('optionBar-container', { open: isOpen }, 'primary-bkg')}>
                <div className={clsx('option-container')}>
                    <div onClick={() => setIsOpen((prev) => !prev)} className={clsx('config-option')}>
                        <ConfigOption isOpen={isOpen} icon="esc" />
                    </div>
                    <div className={clsx('config-option')} onClick={handleFullScreen}>
                        <ConfigOption icon={fullscreen ? <IconArrowsMinimize /> : <IconArrowsMaximize />} />
                    </div>
                    <div className={clsx('config-option')}>
                        <ConfigOption list={themes} type="image" icon={<IconBoxMultiple3 />} />
                    </div>
                    <div className={clsx('config-option')}>
                        <ConfigOption list={playlists} type="list" icon={<IconPlaylist />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfigBar;
