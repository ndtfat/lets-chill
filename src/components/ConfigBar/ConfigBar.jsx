import { useCallback, useState } from 'react';
import { IconPlaylist, IconArrowsMaximize, IconBoxMultiple3 } from '@tabler/icons-react';
import block from 'module-clsx';
import styles from './style.module.scss';
import ConfigOption from '../ConfigOption/ConfigOption';
import { playlists, themes } from '../../assets';

const clsx = block(styles);

function ConfigBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = useCallback((open) => {
        if (open) {
            setIsOpen((prev) => !prev);
        }
    }, []);

    const handleFullScreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen();
        }
    };

    return (
        <div className="wrapper">
            <div className={clsx('optionBar-container', { open: isOpen }, 'primary-bkg')}>
                <div className={clsx('option-container')}>
                    <div className={clsx('config-option')}>
                        <ConfigOption isOpen={isOpen} onOpen={handleOpen} icon="esc" />
                    </div>
                    <div className={clsx('config-option')}>
                        <ConfigOption onClick={handleFullScreen} icon={<IconArrowsMaximize />} />
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
